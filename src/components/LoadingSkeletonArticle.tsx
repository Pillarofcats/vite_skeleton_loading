import '../xtra-css/LoadingSkeletonArticle.css'

export default function LoadingSkeletonArticle() {

  const skeletonProfile = 'skeleton profile-img animation-pulse'
  const skeletonTitle = 'skeleton title width-50 animation-pulse'
  const skeletonText = 'skeleton text width-100 animation-pulse'
  const skeletonTextLast = 'skeleton text width-90 animation-pulse'

  return (
    <div className='skeleton-container'>
      <article className='skeleton-article'>
        <div className='skeleton-heading'>
          <img className={skeletonProfile}></img>
          <h2 className={skeletonTitle}></h2>
        </div>
        <p className={skeletonText}></p>
        <p className={skeletonTextLast}></p>
      </article>
    </div>
  )
}