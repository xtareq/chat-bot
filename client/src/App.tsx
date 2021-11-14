import { useEffect, useState } from 'react'
import logo from './logo.svg'
import { AiOutlineSend } from "react-icons/ai";
import { BsCheck2, BsCheck2All, BsCamera, BsMic, BsPaperclip } from 'react-icons/bs'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  useEffect(()=>{
    
    initChat()
  },['initChat'])

  const initChat = ()=>{
    const d = document.querySelector("#contentBody")
    if(d !== null){
      d.scrollTop= d.scrollHeight;
    }
   
  }

  return (
    <div className="App">
      
      <div className="chatbox">
       <div className="sidebar">

         <div className="sidebar-header" style={{padding:'8px'}}>
              Chat Application
         </div>

         <div className="contacts">
           <div className="contact">
             {/* avatar || name || last time */}
             <div className="avatar" style={{padding:'10px'}}>
               <img src="https://64.media.tumblr.com/2f7a24c2ee7ef38f94cf9d7f596b7576/tumblr_pesaii2Kt51spk7buo4_250.png" height="30" width="30" style={{borderRadius:"50%"}} alt=""  />
             </div>
             <div className="avatar-right" style={{flex:'auto',paddingRight:'8px'}}> 
                <div style={{display:'flex',justifyContent:'space-between'}}>
                  <div className="title">
                    Elizabeth Olsen
                  </div>
                  <div className="small">
                    <small>3.30pm</small>
                </div>
              </div>
               
              <div style={{display:'flex',justifyContent:'space-between',marginTop:'8px'}}>
                  <div className="small mgs" style={{color:'gray'}}>
                    hello how are you...
                  </div>
                  <div className="small">
                    <span className="badge-success">
                      1
                    </span>
                </div>
                </div>
               
             </div>

           </div>
           <div className="contact active">
             {/* avatar || name || last time */}
             <div className="avatar" style={{padding:'10px'}}>
               <img src="https://64.media.tumblr.com/58a0248a8f75891eac0b5bc89e2d8e41/tumblr_p04th6nRWS1wfmgszo9_250.png" height="30" width="30" style={{borderRadius:"50%"}} alt=""  />
             </div>
             <div className="avatar-right" style={{flex:'auto',paddingRight:'10px'}}> 
                <div style={{display:'flex',justifyContent:'space-between'}}>
                  <div className="title">
                     Karen Gilan
                  </div>
                  <div className="small">
                    <small>now</small>
                </div>
              </div>
               
              <div style={{display:'flex',justifyContent:'space-between',marginTop:'10px'}}>
                  <div className="small mgs" style={{color:'gray'}}>
                    what is the best way...
                  </div>
                  <div className="small">
                    {/* <span className="badge-success">
                      3
                    </span> */}
                   </div>
                </div>
               
             </div>

           </div>

         </div>

       </div>
       <div className="content">
         <div className="content-header">
             <div className="avatar" style={{padding:'10px'}}>
               <img src="https://64.media.tumblr.com/58a0248a8f75891eac0b5bc89e2d8e41/tumblr_p04th6nRWS1wfmgszo9_250.png" height="40" width="40" style={{borderRadius:"50%"}} alt=""  />
             </div>
             <div className="title">
                Karen Gillan
                <br />
                <small style={{color:'gray'}}>
                  Last seen: 20min ago
                </small>
             </div>
            
         </div>
         <div className="content-body" id="contentBody">

           <div className="left">
             <div className="msg-top">
               Hello how are you
             </div>

             <div className="mgs-time"
             style={{
               fontSize:'10px',
               float:'right'
             }}
             >
                2.32pm
             </div>
           </div>
           <div className="right" >
           <div className="msg-top" style={{minWidth:'30%'}}>
              Hi i'm fine 
             </div>
            <div className="mgs-time"
             style={{
              
               display:'flex',
               alignItems:'center',
               justifyContent:'flex-end'
               
             }}
             >
                 <span style={{fontSize:'12px', color:'lightgray',paddingRight:'2px'}}>3.32 PM</span>
                 {/* <BsCheck2 style={{color:'lightgray'}}/>
                 <BsCheck2All style={{color:'lightgray'}}/> */}
                 <BsCheck2All style={{color:'skyblue'}}/>
        
             </div>
           </div>
           <div className="left">
             yeah finen. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet molestias ullam ipsum, eius dignissimos incidunt tempora nam excepturi? Eum beatae corrupti vitae quod porro suscipit esse sequi quas? Similique, quia!
           </div>
           <div className="right">
           <div className="msg-top" style={{minWidth:'30%'}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores officiis labore dicta ea fugiat! Nam quo mollitia sed reprehenderit possimus dolorum ut doloribus, excepturi aut id cupiditate ab earum accusantium.
             </div>
            <div className="mgs-time"
             style={{
              
               display:'flex',
               alignItems:'center',
               justifyContent:'flex-end'
               
             }}
             >
                 <span style={{fontSize:'12px', color:'lightgray',paddingRight:'2px'}}>3.32 PM</span>
                 {/* <BsCheck2 style={{color:'lightgray'}}/>
                 <BsCheck2All style={{color:'lightgray'}}/> */}
                 <BsCheck2All style={{color:'skyblue'}}/>
        
             </div>
           </div>

           <div className="left">
             yeah finen. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet molestias ullam ipsum, eius dignissimos incidunt tempora nam excepturi? Eum beatae corrupti vitae quod porro suscipit esse sequi quas? Similique, quia!
           </div>
           <div className="right">
           <div className="msg-top" style={{minWidth:'30%'}}>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quam nihil, asperiores placeat dignissimos beatae veniam ullam sequi eveniet corrupti esse necessitatibus similique earum odio voluptatibus incidunt ab, inventore culpa.
             </div>
            <div className="mgs-time"
             style={{
              
               display:'flex',
               alignItems:'center',
               justifyContent:'flex-end'
               
             }}
             >
                 <span style={{fontSize:'12px', color:'lightgray',paddingRight:'2px'}}>3.32 PM</span>
                 {/* <BsCheck2 style={{color:'lightgray'}}/>
                 <BsCheck2All style={{color:'lightgray'}}/> */}
                 <BsCheck2All style={{color:'skyblue'}}/>
        
             </div>
           </div>
           <div className="right">
           <div className="msg-top" style={{minWidth:'30%'}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quis quod assumenda rem esse, totam itaque recusandae ipsum nemo iusto illo alias quasi laudantium voluptatibus atque sapiente sed magni optio.
             </div>
            <div className="mgs-time"
             style={{
              
               display:'flex',
               alignItems:'center',
               justifyContent:'flex-end'
               
             }}
             >
                 <span style={{fontSize:'12px', color:'lightgray',paddingRight:'2px'}}>3.32 PM</span>
                 {/* <BsCheck2 style={{color:'lightgray'}}/> */}
                 <BsCheck2All style={{color:'lightgray'}}/>
                 {/* <BsCheck2All style={{color:'skyblue'}}/> */}
        
             </div>
           </div>


           
         </div>
         <div className="content-footer">
              <span style={{padding:'0px 15px', cursor:'pointer', borderRadius:'50%'}}>
                <BsCamera/>
              </span>
              <span style={{padding:'0px 15px', cursor:'pointer', borderRadius:'50%'}}>
                <BsPaperclip/>
              </span>
            <input type="text" className="txt" placeholder="type here ..." />
            <button >
            Send <AiOutlineSend/> 
            </button>
            <span style={{padding:'0px 15px', cursor:'pointer', borderRadius:'50%'}}>
                <BsMic/>
              </span>
         </div>
       </div>
      </div>

    </div>
  )
}

export default App
