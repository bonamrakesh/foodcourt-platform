import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
export default function NotFound() {
  return <section className="container not-found"><span className="eyebrow">A LITTLE DETOUR</span><h1>This page wandered<br /><span>off the menu.</span></h1><p>Let's get you back to something delicious.</p><Link to="/" className="button-dark"><ArrowLeft size={16} /> Back home</Link></section>
}
