import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */let e={email:"",message:""};const t=document.querySelector(".feedback-form"),l="feedback-form-state";t.addEventListener("input",a=>{e[a.target.name]=a.target.value,localStorage.setItem(l,JSON.stringify(e))});const r=localStorage.getItem(l);r&&(e=JSON.parse(r),t.elements.email.value=e.email,t.elements.message.value=e.message);t.addEventListener("submit",a=>{a.preventDefault();const s=e.email.trim(),m=e.message.trim();if(!s||!m){alert("Fill please all fields");return}console.log({email:s,message:m}),localStorage.removeItem(l),e.email="",e.message="",t.reset()});
//# sourceMappingURL=2-form.js.map
