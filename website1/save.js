        function save() {
          
          const html = document.getElementById("html");
          const js = document.getElementById("javascript");
          const css = document.getElementById("css");
          console.log("html=" + html.value);
          const output = document.getElementById("output").contentWindow.document
          output.location.reload()
          console.log("saved")
          output.body.innerHTML = html.value;
          var mcss = document.createElement('style');
          mcss.textContent = css.value;
          output.head.appendChild(mcss);
          var mjs = document.createElement('script');
          mjs.type = 'text/javascript';
          mjs.textContent = js.value;
          output.head.appendChild(mjs);
          
          document.cookie = "html=" + html.value;
          document.cookie = "javascript=" + js.value;
          document.cookie = "css=" + css.value;
          
          var titles = output.title;
          document.getElementById("mintitle").textContent = titles;
                                  

        }








