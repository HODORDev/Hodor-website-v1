export const Roadmap = (props) => {
  return (
    <div id='roadmap' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Roadmap</h2>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-xs-12 col-md-3'>
                  {' '}
                  <h3>{d.title}</h3>
                  <ul style={{ textAlign: 'left', listStyleType: 'circle', width: '75%' }}>
                    {d.text.map(text => <li>{text}</li>)}
                  </ul>
                </div>
              ))
            : 'Loading...'}
        </div>
      </div>
    </div>
  )
}
