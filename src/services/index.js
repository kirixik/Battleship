import ServerSide from '../serverMock';
const serverSide = new ServerSide();
const battleShipService = {
    checkField: (x, y) => serverSide.hitFieldAsync(x, y)
}
export default battleShipService;