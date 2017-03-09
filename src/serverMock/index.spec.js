import ServerSide from './index'

describe('server mock tests', () => {
    it('should return miss', () => {
        const serverSide = new ServerSide();
        const hitResult = serverSide.hitField(1, 1);
        expect(hitResult).toEqual({ type: "miss" });
    })
    it('should return hit', () => {
        const serverSide = new ServerSide();
        const hitResult = serverSide.hitField(2, 9);
        expect(hitResult).toEqual({ type: "hit" });
    })
    it('should return hit and sunk', () => {
        const serverSide = new ServerSide();
        const hitResult = serverSide.hitField(0, 0);
        expect(hitResult).toEqual({ type: "hit" });
        const secondHitResult = serverSide.hitField(1, 0);
        expect(secondHitResult).toEqual({ type: "hit", newSunkenShip: "destroyer" });
    })
    it('should return already hit', () => {
        const serverSide = new ServerSide();
        serverSide.hitField(2, 9);
        const hitResult = serverSide.hitField(2, 9);
        expect(hitResult).toEqual({ type: "already_hit" });
    })
})


