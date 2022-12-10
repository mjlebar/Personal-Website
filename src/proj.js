function setUpProj() {
  const sidebar = document.querySelector("sidebar");

  const projInfo = document.createElement("p");
  const projHead = document.createElement("h3");
  sidebar.appendChild(projHead);
  sidebar.appendChild(projInfo);
  projHead.textContent = "Check out my coding projects!";
  projInfo.textContent =
    "These are just a small handful of my favorite projects completed for The Odin Project, an open-source web development education resource. The Odin Project has been a great way for me to learn web development in depth in a hands-on way. I'll be continuing to add projects as I learn new skills like React, MongoDB, and Node. I also hope to return to some of these projects to sharpen their design and add new features as I continue to learn web development skills. (You may need to scroll to see all the projects).";
  const projItems = [projInfo, projHead];
  return projItems;
}

export { setUpProj };
