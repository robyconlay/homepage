export default function Hobby(props) {
  const { title, imagePath, description, text } = props;

  return (
    <div className="hobby-container">
      <h3 className="hobby-title">{title}</h3>
      {imagePath && <img src={imagePath} alt={description} className='image hobby-image' />}
      <p className="hobby-text">{text}</p>
    </div>
  )
}