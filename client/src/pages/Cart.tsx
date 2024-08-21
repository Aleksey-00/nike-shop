import { useParams } from 'react-router-dom'

export default function Cart() {
  const params = useParams();
  return (
    <>Cart page {params.id}</>
  )
}