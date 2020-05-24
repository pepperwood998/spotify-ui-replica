import { useEffect, useRef } from 'react';

function useEffectSkip(effect = () => undefined, deps = []) {
  const didMountRef = useRef(false);

  useEffect(() => {
    let cleanUp = () => undefined;

    if (didMountRef.current) cleanUp = effect();
    else didMountRef.current = true;

    return cleanUp;
  }, deps);
}

export default useEffectSkip;
