import { Link } from 'react-router-dom'

function Home() {
  return (
    <section>
      <p>
        "You take the{' '}
        <Link to="/blue" className="bluePill">
          blue
        </Link>{' '}
        pill... the story ends, you wake up in your bed and believe whatever you want to believe.
        You take the{' '}
        <Link to="/books" className="redPill">
          red
        </Link>{' '}
        pill... you stay in Wonderland, and I show you how deep the rabbit hole goes."-Morpheus
      </p>
      <div className="matrix gif">
        <iframe
          title="matrix"
          src="https://giphy.com/embed/WoD6JZnwap6s8"
          width="100%"
          height="384"
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
        />
        <p>
          <a href="https://giphy.com/gifs/the-matrix-WoD6JZnwap6s8">via GIPHY</a>
        </p>
      </div>
    </section>
  )
}
export default Home
