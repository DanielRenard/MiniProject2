function addline(data, number) {
    data.forEach((item) => {
      const template = document
        .getElementById("line-template")
        .content.cloneNode(true);
      template.querySelector(".id").innerText = item.id;
      template.querySelector(".name").innerText = item.name;
      template.querySelector(".setPiece").innerText = item.setPiece;
      template.querySelector(".show").innerText = item.show;
      template.querySelector(".image").src = item.image;
      document.querySelector(`#line-list-${number}`).appendChild(template);
    });
  }
  
  addline(camera1, 1)
  addline(camera2, 2)
  addline(camera3, 3)
