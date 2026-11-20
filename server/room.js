// Import in the Three.js browser client: import { connectRoom } from './room.js';
export function connectRoom({roomId=new URLSearchParams(location.search).get('room')||'demo',onWelcome=()=>{},onSnapshot=()=>{},onSummon=()=>{},onStatus=()=>{},onError=console.error}={}){
  const scheme=location.protocol==='https:'?'wss:':'ws:';
  const url=scheme+'//'+location.host+'/ws?room='+encodeURIComponent(roomId);
  let ws,closed=false,retry=0,retryTimer=null,playerId=null;
  let lastInput={x:0,z:0,facing:0};
  const seen=new Set();
  const send=m=>{if(ws?.readyState!==WebSocket.OPEN)return false;ws.send(JSON.stringify(m));return true;};
  function open(){
    if(closed)return;onStatus('connecting');ws=new WebSocket(url);
    ws.addEventListener('open',()=>{retry=0;onStatus('connected');send({type:'input',...lastInput});});
    ws.addEventListener('message',e=>{
      let m;try{m=JSON.parse(e.data);}catch{return;}
      if(m.type==='welcome'){playerId=m.playerId;onWelcome(m);}
      else if(m.type==='snapshot')onSnapshot(m);
      else if(m.type==='summon'&&!seen.has(m.eventId)){seen.add(m.eventId);if(seen.size>500)seen.clear();onSummon(m);}
      else if(m.type==='error')onError(m.message);
    });
    ws.addEventListener('close',e=>{onStatus('disconnected');if(!closed&&e.code!==1008)retryTimer=setTimeout(open,Math.min(1000*2**retry++,8000));});
    ws.addEventListener('error',()=>onStatus('connection-error'));
  }
  open();
  return {get playerId(){return playerId;},roomId,sendInput(input={}){lastInput={x:input.x||0,z:input.z||0,facing:input.facing||0};return send({type:'input',...lastInput});},summon(name='pulse'){return send({type:'summon',name});},close(){closed=true;clearTimeout(retryTimer);ws?.close();}};
}
