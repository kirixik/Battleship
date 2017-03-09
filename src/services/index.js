import ServerSide from '../serverMock';
let serverSide = new ServerSide();
const battleShipService = {
    checkField: (x, y) => serverSide.hitFieldAsync(x, y),
    restartService: () => { serverSide = new ServerSide() }
}
export default battleShipService;