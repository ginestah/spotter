function Form() {
  return (
    <>
      <form>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title"></input>
        <label htmlFor="difficulty">Difficulty:</label>
        <input type="text" id="difficulty"></input>
        <label htmlFor="location">Location:</label>
        <input type="text" id="location"></input>
        <label htmlFor="photo-url">
          Photo URL:(please use imgur or hosting site for photos)
        </label>
        <input type="text" id="photo-url"></input>
        <label htmlFor="description">Description:</label>
        <textarea type="text" id="description"></textarea>
        <input type="submit"></input>
      </form>
    </>
  );
}
export default Form;
