import { ICandidate } from '../types';

import DummyCandidates from '../dummy-data/candidates.json';

class LocalStorageService {
    data = [...DummyCandidates] as ICandidate[];
    randomSession = Math.random().toString(36).substring(7);

    constructor() {
        this.data[1].votes.push(this.randomSession);
        this.getSessionId();
        this.getCandidates();
    }

    getSessionId() {
        let sessionId = localStorage.getItem('demar-zemoga-ui-test-session');
        if (sessionId === null) this.setSessionId(this.randomSession);
        sessionId = localStorage.getItem('demar-zemoga-ui-test-session');
        return sessionId!;
    }
    setSessionId(sessionId: string) {
        localStorage.setItem('demar-zemoga-ui-test-session', sessionId);
    }

    getCandidates() {
        let candidatesStringified = localStorage.getItem('demar-zemoga-ui-test-candidates');
        if (candidatesStringified == null) this.setCandidates(this.data);

        candidatesStringified = localStorage.getItem('demar-zemoga-ui-test-candidates');
        const candidates = JSON.parse(candidatesStringified!) as ICandidate[];
        return candidates;
    }

    setCandidates(candidates: ICandidate[]) {
        const stringified = JSON.stringify(candidates);
        localStorage.setItem('demar-zemoga-ui-test-candidates', stringified);
    }
}

export const StorageService = new LocalStorageService();
