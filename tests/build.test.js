import axios from 'axios';
import "regenerator-runtime/runtime";

// Test local hosting
describe('Server Deployment', () => {

    it('Deploys a test json', async () => {
        const result = await axios({
            method: 'get',
            url: 'http://localhost:3001/api',
            responseType: 'json'
        });
        expect(result.data).toStrictEqual({message: "Hello from server!"});
    });

    it('Deploys the built folder', async () => {
        await axios.get('http://localhost:3001/');
        const result = "Success";
        expect(result).toBe("Success");
    });

});