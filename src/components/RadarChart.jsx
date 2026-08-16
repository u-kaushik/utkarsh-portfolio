const polar = (cx, cy, radius, angle) => {
  const radians = (angle - 90) * Math.PI / 180
  return [cx + radius * Math.cos(radians), cy + radius * Math.sin(radians)]
}

const polygon = (values, radius, cx = 160, cy = 160) => values.map((value, index) => {
  const [x,y] = polar(cx, cy, radius * value / 100, index * 360 / values.length)
  return `${x},${y}`
}).join(' ')

export default function RadarChart({ axes, label }) {
  const values = axes.map(axis => axis.value)
  const count = axes.length
  return <div className="radar-wrap">
    <svg className="radar-chart" viewBox="-35 -15 390 350" role="img" aria-label={label}>
      {[25,50,75,100].map(level=><polygon key={level} points={polygon(Array(count).fill(level),118)} className="radar-ring"/>) }
      {axes.map((axis,index)=>{const [x,y]=polar(160,160,118,index*360/count);return <line key={axis.label} x1="160" y1="160" x2={x} y2={y} className="radar-axis"/>})}
      <polygon points={polygon(values,118)} className="radar-shape"/>
      {axes.map((axis,index)=>{const [x,y]=polar(160,160,118*axis.value/100,index*360/count);return <circle key={axis.label} cx={x} cy={y} r="4" className="radar-point"/>})}
      {axes.map((axis,index)=>{const [x,y]=polar(160,160,142,index*360/count);const anchor=x>168?'start':x<152?'end':'middle';const dy=y<35?-3:y>285?10:3;return <text key={`label-${axis.label}`} x={x} y={y} dy={dy} textAnchor={anchor} className="radar-label">{axis.shortLabel||axis.label}</text>})}
    </svg>
    <div className="radar-legend">{axes.map(axis=><div key={axis.label}><span>{axis.label}</span><strong>{axis.value}</strong></div>)}</div>
  </div>
}
