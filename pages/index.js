// pages/index.js
export default function Home() {
  return (
    <main>
      <h1>
        Water Drinking Reminder
      </h1>

      <p>
        I want to be reminded under the following e-mail:
      </p>

      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          const formData = new FormData(evt.target);
          const email = formData.get("email");
          alert(email);
        }}
      >
        <input
          name="email"
          type="email"
          placeholder="E-Mail"
        />
        <button type="submit">
          Submit
        </button>
      </form>
    </main>
  );
}