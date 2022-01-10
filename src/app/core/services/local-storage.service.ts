import { Injectable } from '@angular/core';
import { BehaviorSubject, sequenceEqual } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private STORAGE = 'seen';
  private seen = new BehaviorSubject<number[]>([]);
  seen$ = this.seen.asObservable();

  constructor() {
  }

  markAsSeen(id: number) {
    const seen = this.getSeen();
    if (seen.includes(id)) return;
    const newSeen = [id, ...seen]
    localStorage.setItem(this.STORAGE, JSON.stringify(newSeen));
    this.seen.next(newSeen);
  }

  getSeen() {
    const seen = localStorage.getItem(this.STORAGE);
    if (!seen) return [];
    return JSON.parse(seen) as number[];
  }

  isSeen(id: number) {
    const seen = this.getSeen();
    return seen.includes(id);
  }

}
