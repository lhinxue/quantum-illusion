import {SvgIcon} from "@mui/material";

export default class Icon {
    static style = {
        "stroke": "currentColor",
        "stroke-width": 1.6,
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "fill": "none"
    }

    static upload(props) {
        return (
            <SvgIcon {...props}>
                <path {...Icon.style}
                      d="M 5 12 L 5 18 L 19 18 L 19 12 M 12 14 L 12 4 M 8 7 L 12 4 L 16 7"/>
            </SvgIcon>
        )
    }

    static download(props) {
        return (
            <SvgIcon {...props}>
                <path {...Icon.style}
                      d="M 5 12 L 5 18 L 19 18 L 19 12 M 12 13 L 12 4 M 8 10 L 12 13 L 16 10"/>
            </SvgIcon>
        )
    }
    static setting(props) {
        return (
            <SvgIcon {...props}>
                <path {...Icon.style}
                      d="M 4.2055 16.5002 C 3.8165 15.8263 3.5245 15.1232 3.3252 14.4067 C 4.2004 13.9601 4.7997 13.0501 4.7997 12.0002 C 4.7997 10.9511 4.2013 10.0416 3.3271 9.5947 C 3.7292 8.1448 4.4927 6.7947 5.5782 5.691 C 6.4026 6.2258 7.4904 6.2898 8.3997 5.7648 C 9.3091 5.2398 9.7975 4.2657 9.7466 3.2844 C 11.2452 2.8961 12.7962 2.91 14.2528 3.2867 C 14.2027 4.2673 14.6911 5.2402 15.5997 5.7648 C 16.5091 6.2898 17.5968 6.2258 18.4211 5.6911 C 18.942 6.2219 19.4049 6.8263 19.794 7.5002 C 20.183 8.174 20.475 8.8773 20.6743 9.5937 C 19.799 10.0403 19.1997 10.9502 19.1997 12.0002 C 19.1997 13.0494 19.7981 13.9588 20.6723 14.4057 C 20.2703 15.8555 19.5068 17.2057 18.4212 18.3094 C 17.5968 17.7747 16.5091 17.7106 15.5997 18.2356 C 14.6904 18.7605 14.202 19.7347 14.2529 20.716 C 12.7544 21.1042 11.2033 21.0904 9.7467 20.7136 C 9.7967 19.7331 9.3084 18.7602 8.3997 18.2356 C 7.4905 17.7106 6.4027 17.7746 5.5783 18.3093 C 5.0576 17.7784 4.5945 17.174 4.2055 16.5002 Z M 11.9997 14.7002 C 10.5086 14.7002 9.2997 13.4914 9.2997 12.0002 C 9.2997 10.5091 10.5086 9.3002 11.9997 9.3002 C 13.4909 9.3002 14.6997 10.5091 14.6997 12.0002 C 14.6997 13.4914 13.4909 14.7002 11.9997 14.7002 Z"/>
            </SvgIcon>
        )
    }
    static labelless(props) {
        return (
            <SvgIcon {...props}>
                <path {...Icon.style}
                      d="M 5 7 L 5 17 L 16 17 L 21 12 L 16 7 Z M 5 5 L 19 19"/>
            </SvgIcon>
        )
    }
    static notes(props) {
        return (
            <SvgIcon {...props}>
                <path {...Icon.style}
                      d="M 5 6 L 19 6 M 5 12 L 19 12 M 5 18 L 19 18"/>
            </SvgIcon>
        )
    }
    static fold(props) {
        return (
            <SvgIcon {...props}>
                <path {...Icon.style}
                      d="M 9 6 L 5 6 L 5 18 L 9 18 M 9 12 L 19 12 L 19 16 L 19 8 M 11 15 L 9 12 L 11 9"/>
            </SvgIcon>
        )
    }
    static unfold(props) {
        return (
            <SvgIcon {...props}>
                <path {...Icon.style}
                      d="M 9 6 L 5 6 L 5 18 L 9 18 M 9 12 L 18 12 M 19 16 L 19 8 M 15 15 L 18 12 L 15 9"/>
            </SvgIcon>
        )
    }

    static search(props) {
        return (
            <SvgIcon {...props}>
                <path {...Icon.style}
                      d="M 19 19 L 15 15 A 1 1 0 0 0 6 6 A 1 1 0 0 0 15 15"/>
            </SvgIcon>
        )
    }
    static switch(props) {
        return (
            <SvgIcon {...props}>
                <path {...Icon.style}
                      d="M 18 11 L 18 18 L 6 18 M 15 12 L 18 10 L 21 12 M 6 13 L 6 6 L 18 6 M 3 12 L 6 14 L 9 12"/>
            </SvgIcon>
        )
    }
}


