/** @jsxImportSource @emotion/react */
import { useRouter } from "next/router";
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const list = () => {
  const router = useRouter();
  // console.log(router)

  const a = [
    {
      id: 0,
      fruit: 'Tomatoes'
    },
    {
      id: 1,
      fruit: 'Pasta'
    },
    {
      id: 2,
      fruit: 'Coconut'
    }
  ]

  const navHandler = (param) => {
    const { id, fruit } = param;

    // 1. 일반 형식
    // router.push(`/list/${id}`)

    // 2. URL로 state를 넘기기
    router.push(
      {
        pathname: `/list/${id}`,
        query: {
          title : fruit,
        },
      },
      `/list/${id}`
    )
  }

  return (  
    <div>
      <div css={testStyle}>emotion테스트</div>
      <Divbox>emotion테스트</Divbox>
      <h1 className="title">상품목록</h1>
      {
        a.map((a) => (
          <div className="food" onClick={()=>navHandler(a)}>
            <h4>{a.fruit}</h4>
        </div>
        ))
      }
    </div>
  );
}

export default list;

const testStyle = css`
  border: 1px solid yellow;
  text-align: center;
  color: white;
`
//기본 사용방법.
const Container = styled.div`
  background-color: red;
`

//합성해서 사용할 수 있다. 또, &를 사용해 좀 더 다양하게 사용가능하다.
const Divbox = styled(Container)`
  transition: 0.5s;
  :hover {
    background-color: white;
    
  }
  height: 50px;

`