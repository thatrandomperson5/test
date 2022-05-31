        function save() {
          
          var html = document.getElementById("html");
          var js = document.getElementById("javascript");
          var css = document.getElementById("css");
          console.log("html=" + html.value);
          const output = document.getElementById("output").contentWindow.document
          
          console.log("saved")
          output.body.innerHTML = html.value;
          var mcss = document.createElement('style');
          mcss.textContent = css.value;
          mcss.id = "mcss"
          output.head.appendChild(mcss);
          var mjs = document.createElement('script');
          mjs.type = 'text/javascript';
          mjs.textContent = js.value;
          mjs.id = "mjs"
          output.head.appendChild(mjs);
          
          document.cookie = "html=" + html.value;
          document.cookie = "javascript=" + js.value;
          document.cookie = "css=" + css.value;
          
          var titles = output.title;
          document.getElementById("mintitle").textContent = titles;
                                  

        }








