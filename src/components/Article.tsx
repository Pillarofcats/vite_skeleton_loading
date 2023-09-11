import { JsonData } from '../types/JsonData'

export default function Article({ title, text, id }:JsonData) {

  return (
    <div className='article' id={id}>
      <h2>{ title }</h2>
      <p>{ text }</p>
    </div>
  )
}