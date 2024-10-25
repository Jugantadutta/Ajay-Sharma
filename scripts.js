// JavaScript function to show more info when a card is clicked
function showInfo(type) {
  let message = "";
  
  switch (type) {
    case 'video':
      message = "Video editing software lets you cut, splice, and enhance videos.";
      break;
    case 'audio':
      message = "Audio software is used for sound recording, editing, and mixing.";
      break;
    case 'graphic':
      message = "Graphic design software helps create stunning visuals and artwork.";
      break;
    case 'animation':
      message = "Animation software is used to create 2D/3D animations and effects.";
      break;
    default:
      message = "Unknown type.";
  }

  alert(message);
}
