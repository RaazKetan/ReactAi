function HomePage() {
  const submitHandler = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    if (name) {
      alert(`Hey ${name}!`);
    } else {
      alert("Please enter your name");
    }
  }
  return (
    <div className>
      <h1 className>Hey Developer Please Enter Your Name</h1>
      <form 
      onSubmit={submitHandler}
      >
        <input type="text" placeholder="Enter Your Name" />
        <button
        type="submit"
        >Submit</button>
      </form>
    </div>
  );
}
export default HomePage;