 this.in = function (k) {
        try {
            typeof kv.get(k).v;
            return true;
        } catch (e) {
            return false;
        }
    };
