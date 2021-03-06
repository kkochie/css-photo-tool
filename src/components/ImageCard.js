export default function ImageCard({ eachImage, onDelete }) {
  const { image, id, style } = eachImage;

  function handleDeleteClick() {
    fetch(`http://localhost:3000/cssgallery/${id}`, {
      method: "DELETE",
    });
    onDelete(id);
  }

  return (
    <div className="card">
      <img src={image} alt="CSS" className={style} />
      <br />
      {style}
      <button onClick={handleDeleteClick}>X</button>
    </div>
  );
}
