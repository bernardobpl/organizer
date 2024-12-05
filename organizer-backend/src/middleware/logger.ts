import { Request, Response, NextFunction } from 'express';

export const requestLogger = (req: Request, _ : Response, next: NextFunction) => {
    const date = new Date();
    const formattedDate = date.toLocaleDateString('en-GB', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
    console.log(`[${formattedDate}] ${req.method} ${req.path}`);
    next();
};
