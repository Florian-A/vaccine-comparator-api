import { authService } from '../service/authService';

export async function login(req, res) {
    let response = await authService.login(req.body.mail, req.body.password)
    return res.status(201).json(response)
}