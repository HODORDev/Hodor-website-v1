export const Contact = (props) => {
  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
                <h2>Get In Touch</h2>
                <p>
                Contact the HODOR team if you have any question, we are looking for one more Dev so if you have the abilities to help, feel free to send an email
                </p>
              </div>
              
            </div>
          </div>
          <div className='col-md-10 col-md-offset-1 contact-info'>
            {props.data ? Object.keys(props.data).map(contactInfo => 
              <div className='contact-item'>
                <p>
                  <span>
                    {contactInfo}
                  </span>{' '}
                  <a href={props.data[contactInfo].value} style={{color: '#ff7b47'}}>{props.data ? props.data[contactInfo].text : 'loading'}</a>
                </p>
              </div>
            ) : 'Loading'}
          </div>
          <div className='col-md-12'>
            <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : '/'}>
                      <p style={{color: 'white', fontWeight: 'bold'}}>PancakeSwap</p>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : '/'}>
                      <p style={{color: 'white', fontWeight: 'bold'}}>Charts</p>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : '/'}>
                      <p style={{color: 'white', fontWeight: 'bold'}}>Telegram</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
