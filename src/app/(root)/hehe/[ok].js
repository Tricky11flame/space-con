import Router, { useRouter } from "next/router";
export default function Page(){
    const router = useRouter()
    const lol = router.query.ok

    return(
        <div>{lol}</div>
    )

}