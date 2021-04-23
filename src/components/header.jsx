export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <p style={{fontWeight: 'bolder', fontSize: '20px'}}>{props.data ? props.data.paragraph : 'Loading'}</p>
                <a
                  target='_blank'
                  href='https://poocoin.app/tokens/0x2Bce852Afec9E7a000bd99C2aEED4907eeE2E64e'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  View chart
                </a>{' '}
                <a
                  target='_blank'
                  href='https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x2bce852afec9e7a000bd99c2aeed4907eee2e64e'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Buy on PancakeSwap
                </a>{' '}
                <a
                  target='_blank'
                  href='https://t.me/joinchat/VyukC4OD7ywyYWMy'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Join the Telegram
                </a>{' '}
                <div style={{ marginTop: '30px' }}>
                  {props.data ? props.data.subtexts.map((text, i) => <div style={{fontWeight: 'bold', color: '#ddd', fontSize: '16px'}} id={`${i}`}>{text}</div>) : 'Loading'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
