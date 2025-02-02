
import './App.css'

function Profile() {
  return (
    <div>
      

      <img src="/example2.jpg" className='w-40'/>
      <img src="google_logo.png" />
    </div>
  )
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
        <Profile />
        <Profile />
        <Profile />
    </section>
  );
}
