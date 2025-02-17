interface Iiidprops{
    params:Promise<{id:string}>;
    searchparams:Promise<{}>;

}
async function  iid(Props:Iiidprops){

    const {id}=await Props.params
    return(
        <>
              
                <div>iid page</div>
        </>

    )
}
export default iid;