var si=document.createElement("script");si.src="https://unpkg.com/sweetalert@2.1.2/dist/sweetalert.min.js",null!=document.head?document.head.appendChild(si):document.documentElement.appendChild(si);var simple={alert:function(e,t){if(null==typeof swal)null!=document.head?document.head.appendChild(si):document.documentElement.appendChild(si);else{window.onclick;window.stop(),swal(e).then((function(){t()})),document.querySelector(".swal-modal").style="animation: none !important;",document.querySelector(".swal-button-container").style="position:relative;left:-2%;",document.querySelector(".swal-button").style="text-align: center;background-color: #333; font-family: Arial, sans-serif !important; box-shadow: none !important; outline: none !important; width: 6em; font-weight: normal; text-shadow: none; animation: none !important;",document.querySelector(".swal-text").style="color:#222 !important;"}}};