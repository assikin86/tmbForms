import * as functions from 'firebase-functions';

import { Pdf as testPdf1Middleware } from './pdf';

export const Pdf1 = functions
  .runWith({ memory: '512MB' }) /* to launch headless chrome and get pdf */
  .https.onRequest(testPdf1Middleware);