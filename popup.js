// document.addEventListener('DOMContentLoaded',()=>{


  

// },false)


window.onload=()=>{
   
    document.getElementById('btn').addEventListener('click',()=>{
        chrome.tabs.query({currentWindow:true,active:true},
            (tabs)=>{
                chrome.tabs.sendMessage(tabs[0].id,"hi");
            })
    })
}