export default function ProjectVisual({ project }) {
  const isPhone = project.mediaType !== 'desktop' && project.gallery.length > 1
  const isWebPhone = project.galleryLayout === 'phone-web' || project.galleryLayout === 'web-retina'
  const sources = isWebPhone ? project.gallery.slice(0, 3) : project.mediaType === 'desktop' ? [project.cover] : project.gallery.slice(0, 3)

  return <div className={`project-media ${isPhone ? 'phone-composition' : isWebPhone ? 'phone-composition web-app-phone-composition' : 'desktop-composition'}`}>
    {sources.map((src, index) => project.mediaType === 'desktop' && !isWebPhone && index === 0 ? <picture key={src} className="responsive-project-picture">
      {project.mobileCover && <source media="(max-width: 767px)" srcSet={project.mobileCover}/>}<img src={src} alt="" loading="lazy" className={`visual-${index + 1}`} style={{'--mobile-focus': project.mobileObjectPosition || 'center'}}/>
    </picture> : <img key={src} src={src} alt="" loading="lazy" className={`visual-${index + 1}`}/>) }
    <span className="project-status">{project.status}</span>
  </div>
}
