const compose = (...funcs) => (comp) => {
    return funcs.reduceRight(
        (Wrapped, f) => f(Wrapped), comp)
};

export default compose;