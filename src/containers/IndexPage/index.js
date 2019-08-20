import Link from 'next/link';
import styled from 'styled-components';




const Card = styled.div`

.logo {
    width: 350px;
    margin-top: 50px;
    margin-left: 20px;
  }
  
.church-text {
    font-size: 50px;
    margin-top: 50px;
    text-align: center;
    color: white;
  }


  .name-text {
    font-size: 70px;
    font-weight: 300;
    margin-top: 20px;
    text-align: center;
    letter-spacing: 30px;
    text-indent: 30px;
    color: white;
  }  

  .ekk-image {
  margin-top: 85px;
  } 


  .card {
    overflow: hidden;
    width: 400px;
    height: 600px;
    border-radius: 30px;
    background-color: hsl(215, 62%, 21%);
  }
`;

const A = styled.a``;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  // align-items: center;
  position: relative;
  min-height: 100vh;
  
  ${A} {
    position: absolute;
    top: 0;
    left: 0;
  }
`;




const IndexPage = () => (
  <Wrapper>
    <Card>
      <div className='card'>
       <img className='logo' src='/static/logo.svg' />
       <p className='church-text'>新生命小組教會</p>
       <p className='name-text'>章峻誠</p>
       <img className='ekk-image' src='/static/ekk.svg' />
      </div>
    </Card>
  </Wrapper>
);

export default IndexPage;
