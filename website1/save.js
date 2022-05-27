        function save() {
          const html = document.getElementById("html");
          const js = document.getElementById("javascript");
          const css = document.getElementById("css");
          console.log("html=" + html.value)
          document.getElementById("output").contentWindow.document.body.innerHTML = html.value
          
          output = document.getElementById("output").contentWindow.document.title
          document.getElementById("minititle).textContent = output
                                  
          document.cookie = "html=" + html.value;
          document.cookie = "javascript=" + js.value;
          document.cookie = "css=" + css.value;
        }
