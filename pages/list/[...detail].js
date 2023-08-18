import { useRouter } from "next/router";

// 상세 페이지
const AboutIDPage = () => {
  const router = useRouter();
  console.log(router)

  const a = [
    {
      id: 0,
      name:"첫번째 라우터"
    },
    {
      id: 1,
      name:"두번째 라우터"
    },
    {
      id: 2,
      name:"세번째 라우터"
    }
  ]

  const findItem = a.find((a) => a.id === Number(router.query.detail))
  const itemName = findItem ? findItem.name : 'name이 존재하지 않습니다.'

  return (  
    <div>
      {itemName}
    </div>
  );
}

export default AboutIDPage;