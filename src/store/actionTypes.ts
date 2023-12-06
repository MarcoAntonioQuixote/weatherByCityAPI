type setSearch = {
    type: 'setCityToSearch';
    payload: string
}

type setNoMatch = {
    type: 'noSearchMatch';
    payload?: undefined;
}

type loadInfo = {
    type: 'loadWeatherInfo';
    payload: any;
}

type serverDown = {
    type: 'serverDown';
    payload?: undefined;
}

type Action = setSearch | setNoMatch | loadInfo | serverDown;

export default Action;