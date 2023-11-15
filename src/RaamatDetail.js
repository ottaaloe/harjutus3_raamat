const RaamatDetail = ({ raamat: { pealkiri, autor, aasta, kirjeldus, pilt } }) => (

    <div style={{ display: 'flex', flexDirection: 'column' , 'padding-top':'100px' }}>
        <strong>{pealkiri}</strong>
        <i>Autor: {autor}</i>
        <i>Aasta: {aasta}</i>

        <div style={{ 'width': '500px' }} >
            <img style={{ float: 'right', width: '200px' , padding:'20px'}} src={pilt} />
            {kirjeldus}
        </div>

    </div>
)

export default RaamatDetail;
