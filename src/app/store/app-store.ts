export const VoteActions = {
  NO: "NO",
  YES: "YES"
};

export class AppStore {
  protected listeners = [];
  protected state = {
    counter: 0
  };

  getState(): any {
    return this.state;
  }

  dispatch(action) {
    const newState = this.reducer(this.state, action);
    if (newState !== this.state) {
      this.state = newState;
      this.listeners.forEach(notify => notify());
    }
  }

  subscribe(notify) {
    this.listeners.push(notify);
  }

  protected reducer(state, action) {
    switch (action) {
      case VoteActions.YES:
        state = { ...state, counter: state.counter + 1 };
        return state;

      case VoteActions.NO:
        state = { ...state, counter: state.counter - 1 };
        return state;

      default: return state;
    }
  }
}

