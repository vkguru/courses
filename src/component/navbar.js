import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../asset/img/logo.png';

 function Nav() {
  return (
    <nav className="nav">
      <div className="nav-hld">
        <div className="logo">
          <Link to="/">
            <svg width="116" height="71" viewBox="0 0 116 71" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.18042 35.593H3.20009L5.20225 43.6455H5.23508L7.86087 35.593H10.4374L13.0413 43.8588H13.0796L15.1912 35.593H17.9921L14.3214 48.175H11.8543L9.08624 39.4606H9.05342L6.2854 48.1531H3.90577L0.18042 35.593Z" fill="white"/>
            <path d="M18.5612 41.8731C18.5473 40.9371 18.7183 40.0076 19.0645 39.1379C19.3838 38.352 19.8646 37.6419 20.4759 37.0537C21.0922 36.4698 21.8221 36.0192 22.6202 35.7298C24.3791 35.117 26.2935 35.117 28.0524 35.7298C28.8505 36.0192 29.5805 36.4698 30.1968 37.0537C30.808 37.6419 31.2888 38.352 31.6081 39.1379C32.2816 40.8992 32.2816 42.847 31.6081 44.6083C31.2888 45.3942 30.808 46.1043 30.1968 46.6925C29.5787 47.2728 28.8491 47.7213 28.0524 48.0109C26.2935 48.6237 24.3791 48.6237 22.6202 48.0109C21.8235 47.7213 21.0939 47.2728 20.4759 46.6925C19.8646 46.1043 19.3838 45.3942 19.0645 44.6083C18.7203 43.738 18.5493 42.8089 18.5612 41.8731ZM21.4332 41.8731C21.4258 42.4321 21.5184 42.9879 21.7067 43.5142C21.8817 43.9886 22.1516 44.4223 22.4999 44.7888C22.8445 45.1553 23.2644 45.4427 23.7307 45.6313C24.7636 46.0322 25.909 46.0322 26.9419 45.6313C27.4075 45.4414 27.8272 45.1541 28.1727 44.7888C28.5353 44.4136 28.8149 43.9663 28.9933 43.4759C29.3585 42.4273 29.3585 41.286 28.9933 40.2374C28.8197 39.7591 28.5497 39.3216 28.2001 38.9519C27.8531 38.5882 27.4338 38.3013 26.9692 38.1095C25.9364 37.7085 24.7909 37.7085 23.7581 38.1095C23.2928 38.2999 22.8733 38.5871 22.5273 38.9519C22.1776 39.3216 21.9076 39.7591 21.734 40.2374C21.5372 40.7604 21.4353 41.3143 21.4332 41.8731Z" fill="white"/>
            <path d="M33.9932 35.593H38.8399C39.452 35.592 40.0624 35.6543 40.6616 35.779C41.198 35.8897 41.7086 36.1013 42.166 36.4027C42.6121 36.6946 42.9742 37.0982 43.2163 37.5733C43.4902 38.1442 43.6216 38.7731 43.5992 39.4059C43.6238 40.216 43.3816 41.0117 42.9099 41.6707C42.4115 42.3093 41.687 42.7322 40.8859 42.8523L44.0806 48.1531H40.7491L38.1233 43.1313H36.7612V48.1531H33.9932V35.593ZM36.7612 40.7899H38.4023C38.6485 40.7899 38.9111 40.7899 39.1901 40.7899C39.4487 40.7752 39.7035 40.7198 39.945 40.6258C40.1913 40.5384 40.4017 40.3718 40.5433 40.1521C40.6848 39.9323 40.7495 39.6718 40.7272 39.4114C40.7411 39.1437 40.6723 38.8783 40.5303 38.651C40.4043 38.4651 40.233 38.3145 40.0325 38.2134C39.8116 38.1074 39.5752 38.0373 39.3323 38.0055C39.0784 37.9713 38.8226 37.9531 38.5664 37.9508H36.7612V40.7899Z" fill="white"/>
            <path d="M45.5958 35.593H48.3584V40.8118L53.238 35.593H56.8594L51.2686 41.4299L57.3353 48.1531H53.4677L48.3584 42.1958V48.1531H45.5958V35.593Z" fill="white"/>
            <path d="M64.5016 38.6619C64.2635 38.3693 63.9464 38.151 63.5881 38.0328C63.2377 37.903 62.8676 37.8345 62.494 37.8304C62.2841 37.8301 62.0748 37.854 61.8704 37.9016C61.6607 37.9465 61.4582 38.0201 61.2686 38.1204C61.0861 38.2155 60.9287 38.3523 60.8091 38.5197C60.6855 38.6976 60.6222 38.9104 60.6286 39.1269C60.6196 39.2955 60.6542 39.4635 60.7289 39.6149C60.8036 39.7662 60.916 39.8958 61.0553 39.9912C61.3897 40.2287 61.7587 40.4132 62.1493 40.5383C62.5815 40.675 63.0465 40.8173 63.5443 40.9595C64.0327 41.0984 64.5001 41.3027 64.9338 41.5667C65.3749 41.8251 65.7495 42.1828 66.0279 42.6116C66.3322 43.145 66.4783 43.7541 66.4491 44.3676C66.4651 44.9987 66.332 45.6247 66.0607 46.1947C65.8122 46.7017 65.4511 47.1451 65.0049 47.4912C64.5402 47.8319 64.0148 48.0807 63.4568 48.2242C62.8528 48.3908 62.2288 48.4737 61.6023 48.4704C60.8297 48.4791 60.0615 48.3532 59.3321 48.0984C58.6071 47.8319 57.943 47.4227 57.3792 46.8949L59.3485 44.7067C59.6368 45.0843 60.0121 45.3865 60.4426 45.5875C60.8603 45.79 61.3186 45.8948 61.7828 45.8938C62.013 45.8951 62.2425 45.8694 62.4666 45.8172C62.6854 45.7686 62.8956 45.6875 63.0903 45.5765C63.2661 45.4761 63.4175 45.3378 63.5334 45.1717C63.6771 44.9344 63.7292 44.6528 63.6798 44.3798C63.6305 44.1068 63.483 43.8612 63.2653 43.6892C62.9311 43.4515 62.562 43.267 62.1712 43.1422C61.7336 42.989 61.2577 42.8304 60.7489 42.6772C60.2536 42.5286 59.7779 42.3211 59.3321 42.0591C58.8962 41.8008 58.5227 41.4497 58.238 41.0306C57.9278 40.5252 57.7772 39.938 57.8058 39.3457C57.7915 38.7294 57.9287 38.1189 58.2052 37.5679C58.4724 37.0682 58.8458 36.6331 59.2993 36.2933C59.7562 35.9412 60.276 35.6794 60.831 35.5219C61.4137 35.3509 62.018 35.2643 62.6253 35.2648C63.322 35.2623 64.0153 35.3637 64.6821 35.5657C65.3456 35.7672 65.9565 36.1128 66.471 36.5777L64.5016 38.6619Z" fill="white"/>
            <path d="M68.4785 35.593H71.2137V40.2757H76.5911V35.593H79.3592V48.175H76.5911V42.7264H71.2137V48.1531H68.4785V35.593Z" fill="white"/>
            <path d="M81.2629 41.873C81.2487 40.9365 81.4217 40.0066 81.7716 39.1378C82.0869 38.3497 82.5683 37.6389 83.183 37.0536C83.803 36.4704 84.5368 36.0216 85.3383 35.7352C87.0953 35.1224 89.008 35.1224 90.765 35.7352C91.5647 36.0246 92.2965 36.4752 92.9149 37.059C93.5262 37.6461 94.0054 38.3566 94.3208 39.1433C95.0004 40.9034 95.0004 42.8536 94.3208 44.6137C94.0054 45.4004 93.5262 46.1109 92.9149 46.6979C92.2948 47.2782 91.5634 47.7267 90.765 48.0163C89.008 48.6291 87.0953 48.6291 85.3383 48.0163C84.5416 47.7267 83.812 47.2782 83.1939 46.6979C82.5792 46.1126 82.0979 45.4017 81.7826 44.6137C81.4301 43.7434 81.2535 42.8119 81.2629 41.873ZM84.1403 41.873C84.1329 42.432 84.2256 42.9878 84.4138 43.5141C84.589 43.9872 84.8568 44.4205 85.2016 44.7887C85.5492 45.1476 85.9686 45.4291 86.4324 45.6148C86.9409 45.8223 87.4861 45.9247 88.0353 45.9156C88.5861 45.9242 89.133 45.8219 89.6436 45.6148C90.1085 45.4235 90.5279 45.1365 90.8744 44.7723C91.2274 44.401 91.4977 43.9592 91.6676 43.4758C92.0398 42.4284 92.0398 41.2848 91.6676 40.2374C91.5 39.7605 91.2335 39.3244 90.8857 38.9577C90.5378 38.591 90.1164 38.3019 89.649 38.1094C89.1385 37.9023 88.5916 37.7999 88.0407 37.8085C87.4916 37.7995 86.9464 37.9018 86.4379 38.1094C85.9716 38.3011 85.5506 38.588 85.2016 38.9518C84.8555 39.3232 84.5876 39.7604 84.4138 40.2374C84.2263 40.762 84.1337 41.3159 84.1403 41.873Z" fill="white"/>
            <path d="M96.7004 35.593H101.361C101.982 35.5899 102.602 35.6504 103.21 35.7735C103.749 35.8681 104.265 36.0689 104.726 36.3643C105.162 36.6607 105.516 37.0636 105.754 37.535C106.027 38.1121 106.158 38.746 106.137 39.384C106.156 40.019 106.035 40.6505 105.781 41.233C105.562 41.7063 105.225 42.1152 104.802 42.4201C104.36 42.7281 103.859 42.9422 103.331 43.0492C102.725 43.178 102.106 43.2403 101.487 43.2352H99.463V48.1585H96.7278L96.7004 35.593ZM99.4356 40.9157H101.285C101.525 40.9173 101.766 40.8934 102.001 40.8446C102.22 40.8018 102.429 40.7203 102.619 40.6039C102.806 40.4938 102.959 40.335 103.063 40.1444C103.184 39.9179 103.243 39.6628 103.232 39.4059C103.246 39.1317 103.169 38.8608 103.013 38.6346C102.87 38.4432 102.682 38.2894 102.466 38.186C102.222 38.0746 101.962 38.0043 101.695 37.9781C101.41 37.9781 101.148 37.9343 100.88 37.9343H99.4575L99.4356 40.9157Z" fill="white"/>
            <path d="M114.08 38.6619C113.843 38.3681 113.525 38.1495 113.166 38.0328C112.816 37.9024 112.446 37.8339 112.072 37.8304C111.862 37.8301 111.653 37.854 111.449 37.9015C111.239 37.9464 111.036 38.0201 110.847 38.1203C110.665 38.2169 110.508 38.3535 110.387 38.5197C110.264 38.6975 110.2 38.9104 110.207 39.1269C110.198 39.2954 110.232 39.4635 110.307 39.6148C110.382 39.7662 110.494 39.8958 110.633 39.9912C110.968 40.2287 111.337 40.4132 111.728 40.5382C112.16 40.675 112.625 40.8172 113.122 40.9595C113.613 41.0984 114.082 41.3026 114.517 41.5667C114.958 41.8258 115.332 42.1835 115.612 42.6115C115.92 43.1434 116.069 43.7533 116.038 44.3675C116.052 44.9991 115.918 45.6251 115.644 46.1947C115.396 46.7016 115.035 47.1451 114.589 47.4911C114.128 47.8409 113.604 48.099 113.046 48.2515C112.442 48.4182 111.818 48.501 111.191 48.4977C110.419 48.5064 109.651 48.3805 108.921 48.1257C108.197 47.8604 107.535 47.451 106.974 46.9222L108.938 44.7341C109.225 45.1124 109.601 45.4147 110.032 45.6148C110.447 45.818 110.904 45.9228 111.366 45.9211C111.597 45.9227 111.826 45.897 112.05 45.8445C112.269 45.7959 112.479 45.7148 112.674 45.6038C112.85 45.5034 113.001 45.3651 113.117 45.199C113.264 44.9628 113.319 44.6801 113.269 44.4061C113.219 44.1321 113.07 43.8863 112.849 43.7166C112.515 43.4788 112.146 43.2943 111.755 43.1695C111.317 43.0163 110.841 42.8577 110.333 42.7045C109.818 42.5549 109.323 42.3417 108.861 42.07C108.424 41.8138 108.05 41.4623 107.767 41.0415C107.453 40.5377 107.3 39.9498 107.329 39.3566C107.315 38.7403 107.452 38.1298 107.729 37.5788C107.998 37.0803 108.371 36.6455 108.823 36.3042C109.28 35.9521 109.8 35.6903 110.354 35.5328C110.935 35.3604 111.538 35.272 112.143 35.2702C112.84 35.2677 113.533 35.3691 114.2 35.5711C114.858 35.7765 115.463 36.1238 115.973 36.5886L114.08 38.6619Z" fill="white"/>
            <path d="M0.33374 56.9058H3.40811V57.5294H1.00113V59.0611H3.23853V59.6793H1.00113V61.7908H0.33374V56.9058Z" fill="white"/>
            <path d="M5.51413 56.9058H6.11587L8.20557 61.7908H7.43424L6.9419 60.5819H4.62245L4.13559 61.7908H3.36426L5.51413 56.9058ZM6.70121 60.002L5.79312 57.7591L4.86862 60.002H6.70121Z" fill="white"/>
            <path d="M12.3139 57.9615C12.1677 57.781 11.98 57.6383 11.7669 57.5458C11.5602 57.4536 11.3367 57.4052 11.1104 57.4035C10.8524 57.3993 10.5966 57.4515 10.361 57.5567C10.1416 57.6569 9.94586 57.8023 9.78659 57.9834C9.62585 58.1681 9.50149 58.3816 9.42007 58.6125C9.33137 58.8618 9.28694 59.1247 9.28878 59.3893C9.28858 59.639 9.33114 59.887 9.4146 60.1223C9.49365 60.3454 9.61431 60.5515 9.77018 60.7295C9.9303 60.9056 10.1261 61.0455 10.3446 61.1398C10.5856 61.2462 10.847 61.2984 11.1104 61.293C11.3669 61.2992 11.6208 61.2409 11.8489 61.1234C12.0656 61.0044 12.2526 60.838 12.396 60.6366L12.943 61.0578C12.8858 61.1362 12.8217 61.2095 12.7515 61.2766C12.6398 61.3841 12.5169 61.4795 12.385 61.561C12.2124 61.6633 12.029 61.7458 11.838 61.8072C11.5975 61.8835 11.3463 61.9205 11.094 61.9166C10.7334 61.9207 10.3764 61.8441 10.0492 61.6923C9.76545 61.5474 9.51128 61.3507 9.29972 61.1125C9.08299 60.8773 8.91393 60.6024 8.80191 60.3029C8.68815 60.0116 8.62881 59.702 8.62686 59.3893C8.62527 59.0326 8.68829 58.6787 8.81285 58.3445C8.93774 58.0351 9.1238 57.7541 9.35989 57.5184C9.58351 57.2781 9.85835 57.0911 10.164 56.9714C10.4919 56.8369 10.8436 56.7699 11.198 56.7744C11.5222 56.777 11.8432 56.8401 12.1443 56.9604C12.4423 57.0713 12.7049 57.2602 12.9047 57.5075L12.3139 57.9615Z" fill="white"/>
            <path d="M13.8346 56.9058H14.4965V61.7908H13.8346V56.9058Z" fill="white"/>
            <path d="M15.8204 56.9058H16.4824V61.1672H18.7252V61.7908H15.8204V56.9058Z" fill="white"/>
            <path d="M19.4691 56.9058H20.131V61.7908H19.4691V56.9058Z" fill="white"/>
            <path d="M22.478 57.5294H20.908V56.9058H24.7372V57.5294H23.1399V61.7908H22.478V57.5294Z" fill="white"/>
            <path d="M26.3837 56.9058H26.9855L29.0752 61.7908H28.2984L27.8115 60.5819H25.4866L25.0052 61.7908H24.2284L26.3837 56.9058ZM27.5708 60.002L26.6573 57.7591L25.7109 60.002H27.5708Z" fill="white"/>
            <path d="M30.1639 57.5294H28.5884V56.9058H32.4177V57.5294H30.8258V61.7908H30.1639V57.5294Z" fill="white"/>
            <path d="M33.1726 56.9058H33.8345V61.7908H33.1726V56.9058Z" fill="white"/>
            <path d="M35.1584 56.9058H36.0282L38.7142 60.921V56.9058H39.3871V61.7908H38.5501L35.8149 57.7756V61.7908H35.1584V56.9058Z" fill="white"/>
            <path d="M44.8573 59.0611V61.4681C44.7294 61.5458 44.5937 61.61 44.4525 61.6595C44.2985 61.7159 44.1414 61.7634 43.982 61.8018C43.8177 61.8394 43.6515 61.8686 43.4842 61.8893C43.3146 61.8893 43.156 61.8893 43.0138 61.8893C42.6389 61.8932 42.267 61.8225 41.9197 61.6814C41.6126 61.5552 41.3337 61.3693 41.0991 61.1344C40.8747 60.8989 40.7015 60.6195 40.5904 60.3138C40.3496 59.67 40.3496 58.9609 40.5904 58.3171C40.7168 58.0118 40.9028 57.7347 41.1374 57.502C41.3657 57.2672 41.6393 57.0811 41.9416 56.955C42.2677 56.8211 42.6175 56.7541 42.97 56.758C43.3419 56.7491 43.7124 56.8065 44.0641 56.9276C44.3329 57.0308 44.577 57.1892 44.7807 57.3926L44.3102 57.8959C44.1284 57.718 43.91 57.5817 43.6702 57.4966C43.4411 57.4192 43.2008 57.3804 42.9591 57.3817C42.6975 57.3769 42.438 57.4291 42.1987 57.5348C41.9793 57.6353 41.7821 57.7785 41.6187 57.956C41.4553 58.1335 41.3288 58.3418 41.2468 58.5688C41.1584 58.8124 41.1139 59.0699 41.1155 59.3291C41.1132 59.5917 41.1634 59.8521 41.2632 60.095C41.3544 60.3253 41.4901 60.5354 41.6626 60.7132C41.8338 60.8887 42.0384 61.0282 42.2643 61.1234C42.5013 61.2237 42.7564 61.274 43.0138 61.2711C43.2379 61.2721 43.4615 61.2501 43.6811 61.2055C43.8722 61.1729 44.0569 61.1101 44.2282 61.0195V59.6574H43.1341V59.0392L44.8573 59.0611Z" fill="white"/>
            <path d="M51.5422 57.9615C51.396 57.781 51.2083 57.6383 50.9952 57.5458C50.7885 57.4536 50.565 57.4052 50.3387 57.4035C50.0807 57.3993 49.8249 57.4515 49.5893 57.5567C49.3795 57.6597 49.1932 57.805 49.0423 57.9834C48.8779 58.1664 48.7514 58.3803 48.6703 58.6125C48.5816 58.8618 48.5371 59.1247 48.539 59.3893C48.5388 59.639 48.5813 59.887 48.6648 60.1223C48.7438 60.3454 48.8645 60.5515 49.0204 60.7295C49.1725 60.9025 49.3588 61.0422 49.5674 61.1398C49.8085 61.2462 50.0699 61.2984 50.3333 61.293C50.5898 61.2992 50.8437 61.2409 51.0718 61.1234C51.2899 61.0065 51.4774 60.8397 51.6188 60.6366L52.1659 61.0578C52.1086 61.1362 52.0446 61.2095 51.9744 61.2766C51.8626 61.3841 51.7398 61.4795 51.6079 61.561C51.4353 61.6633 51.2518 61.7458 51.0608 61.8072C50.8204 61.8835 50.5691 61.9205 50.3169 61.9166C49.9562 61.9207 49.5992 61.8441 49.272 61.6923C48.9726 61.5521 48.7033 61.3552 48.4788 61.1125C48.2621 60.8773 48.093 60.6024 47.981 60.3029C47.8672 60.0116 47.8079 59.702 47.8059 59.3893C47.8044 59.0326 47.8674 58.6787 47.9919 58.3445C48.1168 58.0351 48.3029 57.7541 48.539 57.5184C48.7633 57.2789 49.0379 57.0921 49.3431 56.9714C49.671 56.8369 50.0227 56.7699 50.377 56.7744C50.7013 56.777 51.0223 56.8401 51.3234 56.9604C51.6213 57.0713 51.884 57.2602 52.0838 57.5075L51.5422 57.9615Z" fill="white"/>
            <path d="M53.063 56.9057H54.7807C55.0435 56.8983 55.3052 56.941 55.552 57.0316C55.7347 57.1042 55.8991 57.2163 56.0334 57.3598C56.1473 57.4853 56.2315 57.6349 56.2796 57.7974C56.3221 57.9525 56.3442 58.1125 56.3452 58.2733C56.3456 58.4266 56.3177 58.5787 56.2632 58.7219C56.2109 58.8671 56.131 59.0009 56.0279 59.1158C55.9201 59.239 55.7902 59.341 55.645 59.4167C55.4895 59.4959 55.3208 59.546 55.1472 59.5644L56.5367 61.7908H55.7052L54.4634 59.6355H53.7249V61.7908H53.063V56.9057ZM53.7249 59.0611H54.5947C54.7231 59.0614 54.8512 59.0504 54.9776 59.0283C55.0962 59.0089 55.2108 58.97 55.3168 58.9134C55.4156 58.8584 55.497 58.7769 55.552 58.6782C55.6131 58.5519 55.6448 58.4135 55.6448 58.2733C55.6448 58.1331 55.6131 57.9948 55.552 57.8685C55.497 57.7698 55.4156 57.6883 55.3168 57.6333C55.2108 57.5766 55.0962 57.5378 54.9776 57.5184C54.8512 57.4963 54.7231 57.4853 54.5947 57.4856H53.7249V59.0611Z" fill="white"/>
            <path d="M57.3463 56.9058H60.5027V57.5294H57.9864V58.9845H60.3058V59.6027H57.9864V61.1672H60.6012V61.7908H57.319L57.3463 56.9058Z" fill="white"/>
            <path d="M63.1613 56.9058H63.763L65.8527 61.7908H65.0978L64.6055 60.5819H62.2806L61.7992 61.7908H61.0278L63.1613 56.9058ZM64.3484 60.002L63.4403 57.7591L62.5158 60.002H64.3484Z" fill="white"/>
            <path d="M66.9413 57.5294H65.3713V56.9058H69.2006V57.5294H67.6251V61.7908H66.9632L66.9413 57.5294Z" fill="white"/>
            <path d="M69.9501 56.9058H70.612V61.7908H69.9501V56.9058Z" fill="white"/>
            <path d="M71.2684 56.9058H72.0343L73.4675 60.8828L74.9555 56.9058H75.6776L73.7575 61.7908H73.1338L71.2684 56.9058Z" fill="white"/>
            <path d="M76.3505 56.9058H79.5015V57.5294H77.0124V58.9845H79.321V59.6027H77.0015V61.1672H79.6163V61.7908H76.3341L76.3505 56.9058Z" fill="white"/>
            <path d="M83.6426 57.5294H82.0562V56.9058H85.8854V57.5294H84.31V61.7908H83.6426V57.5294Z" fill="white"/>
            <path d="M86.6514 56.9058H87.3133V58.9353H89.8461V56.9058H90.508V61.7908H89.8461V59.5534H87.3133V61.7908H86.6514V56.9058Z" fill="white"/>
            <path d="M91.8317 56.9058H92.4936V61.7908H91.8317V56.9058Z" fill="white"/>
            <path d="M93.8174 56.9058H94.6872L97.3786 60.921V56.9058H98.0405V61.7908H97.209L94.4738 57.7756V61.7908H93.8174V56.9058Z" fill="white"/>
            <path d="M99.3755 56.9058H100.037V59.0173H100.092L102.253 56.9058H103.177L100.82 59.1596L103.336 61.7908H102.373L100.109 59.3401H100.054V61.7799H99.3919L99.3755 56.9058Z" fill="white"/>
            <path d="M103.938 56.9058H104.6V61.7908H103.938V56.9058Z" fill="white"/>
            <path d="M105.902 56.9058H106.771L109.463 60.921V56.9058H110.125V61.7908H109.282L106.547 57.7756V61.7908H105.885L105.902 56.9058Z" fill="white"/>
            <path d="M115.623 59.0611V61.4681C115.492 61.5448 115.355 61.6089 115.212 61.6595C115.059 61.7167 114.901 61.7642 114.742 61.8017C114.577 61.8393 114.411 61.8686 114.244 61.8893C114.08 61.8893 113.921 61.8893 113.774 61.8893C113.399 61.8926 113.027 61.822 112.679 61.6814C112.374 61.5574 112.098 61.3706 111.869 61.1332C111.64 60.8957 111.463 60.6128 111.35 60.3029C111.234 59.9895 111.174 59.6579 111.175 59.3237C111.17 58.9751 111.235 58.629 111.367 58.3062C111.487 58.004 111.663 57.7274 111.886 57.4911C112.115 57.2563 112.388 57.0702 112.69 56.944C113.017 56.8106 113.366 56.7436 113.719 56.7471C114.091 56.7377 114.461 56.7951 114.813 56.9167C115.082 57.0198 115.326 57.1782 115.53 57.3817L115.059 57.8849C114.877 57.707 114.659 57.5708 114.419 57.4856C114.19 57.4083 113.95 57.3695 113.708 57.3707C113.448 57.3658 113.19 57.4181 112.953 57.5239C112.733 57.6225 112.535 57.766 112.373 57.9451C112.209 58.1221 112.083 58.3306 112.001 58.5578C111.913 58.8015 111.868 59.0589 111.87 59.3182C111.862 59.8336 112.059 60.3311 112.417 60.7022C112.588 60.8777 112.793 61.0172 113.019 61.1125C113.256 61.2123 113.511 61.2625 113.768 61.2602C113.992 61.2614 114.216 61.2394 114.435 61.1945C114.626 61.1604 114.811 61.0977 114.983 61.0085V59.6464H113.888V59.0283L115.623 59.0611Z" fill="white"/>
            <path d="M4.62236 70.0675H3.73069L3.12894 69.422C2.94314 69.6407 2.72108 69.8257 2.47249 69.969C2.21649 70.1098 1.92755 70.1797 1.63552 70.1714C1.38953 70.1753 1.14487 70.1345 0.913426 70.0511C0.726831 69.9819 0.557126 69.8737 0.415619 69.7338C0.286202 69.6061 0.187121 69.4509 0.125688 69.2798C0.0610362 69.1048 0.0295008 68.9193 0.0326906 68.7327C0.0300664 68.5734 0.0598444 68.4152 0.120217 68.2677C0.181266 68.1277 0.264378 67.9985 0.366385 67.8848C0.469952 67.767 0.587525 67.6623 0.716492 67.573C0.85376 67.4843 0.996249 67.4039 1.14318 67.3323C0.992467 67.1759 0.856924 67.0055 0.738373 66.8235C0.624337 66.6526 0.558219 66.4543 0.546909 66.2492C0.545028 66.0866 0.579403 65.9256 0.647536 65.778C0.715668 65.6304 0.815844 65.4998 0.940778 65.3958C1.06508 65.2984 1.20592 65.2243 1.35653 65.177C1.51754 65.126 1.68545 65.1001 1.85434 65.1004C2.01928 65.0995 2.18341 65.1234 2.3412 65.1715C2.48729 65.2123 2.62328 65.2831 2.74054 65.3794C2.85875 65.4699 2.95271 65.5883 3.01406 65.724C3.08296 65.8749 3.11663 66.0395 3.11253 66.2054C3.11524 66.3488 3.08531 66.491 3.025 66.6211C2.96523 66.7477 2.88584 66.864 2.78978 66.9658C2.69385 67.0715 2.58548 67.1651 2.46702 67.2448C2.34922 67.3231 2.22683 67.3944 2.1005 67.4581L3.06877 68.4701L3.68145 67.4691H4.45278L3.51187 68.9297L4.62236 70.0675ZM1.55893 67.7645C1.46047 67.8192 1.362 67.8793 1.26353 67.945C1.1692 68.0073 1.08125 68.0787 1.00095 68.1583C0.921771 68.2336 0.856898 68.3225 0.809489 68.4209C0.759804 68.5269 0.735458 68.643 0.738373 68.7601C0.737056 68.8752 0.761347 68.9892 0.809489 69.0938C0.861329 69.1954 0.931851 69.2863 1.01736 69.3618C1.10321 69.4419 1.20344 69.505 1.31277 69.5478C1.42062 69.5911 1.53573 69.6133 1.65193 69.6135C1.76712 69.6127 1.8815 69.5942 1.9911 69.5588C2.09107 69.5224 2.18652 69.4747 2.27556 69.4165C2.36504 69.3584 2.44925 69.2925 2.5272 69.2196C2.60358 69.1497 2.67318 69.0728 2.73507 68.9898L1.55893 67.7645ZM2.47249 66.2054C2.47556 66.1333 2.46241 66.0615 2.43401 65.9953C2.4056 65.929 2.36267 65.8699 2.30838 65.8225C2.18804 65.725 2.03644 65.6745 1.88169 65.6802C1.71791 65.6761 1.55766 65.7282 1.42764 65.8279C1.36258 65.8777 1.31063 65.9425 1.27632 66.0169C1.242 66.0912 1.22634 66.1728 1.23071 66.2546C1.23067 66.3356 1.24744 66.4157 1.27994 66.4899C1.3096 66.5653 1.34817 66.6369 1.39482 66.7032C1.44406 66.7688 1.49329 66.8345 1.54799 66.8947L1.71758 67.0697L1.97469 66.9165C2.06125 66.8607 2.14353 66.7986 2.22085 66.7306C2.29022 66.6617 2.35085 66.5845 2.40138 66.5008C2.45043 66.4102 2.47495 66.3084 2.47249 66.2054Z" fill="white"/>
            <path d="M7.37415 65.1824H8.03606V70.0675H7.37415V65.1824Z" fill="white"/>
            <path d="M9.35986 65.1824H10.2297L12.9156 69.1868V65.1715H13.5775V70.0566H12.7515L10.0163 66.0413V70.0566H9.35986V65.1824Z" fill="white"/>
            <path d="M14.9178 65.1824H15.7876L18.4791 69.1868V65.1715H19.1465V70.0566H18.315L15.5798 66.0413V70.0566H14.9178V65.1824Z" fill="white"/>
            <path d="M22.7186 70.1933C22.3661 70.1968 22.0165 70.1299 21.6902 69.9964C21.3888 69.8715 21.1168 69.6852 20.8915 69.4494C20.6568 69.2167 20.4709 68.9396 20.3444 68.6343C20.0891 67.9819 20.0891 67.2572 20.3444 66.6048C20.4709 66.301 20.6569 66.0257 20.8915 65.7951C21.1168 65.5593 21.3888 65.373 21.6902 65.2481C22.3507 64.9856 23.0865 64.9856 23.747 65.2481C24.0493 65.3742 24.3229 65.5603 24.5512 65.7951C24.7858 66.0257 24.9718 66.301 25.0982 66.6048C25.3536 67.2572 25.3536 67.9819 25.0982 68.6343C24.9718 68.9396 24.7858 69.2167 24.5512 69.4494C24.3229 69.6842 24.0493 69.8703 23.747 69.9964C23.4209 70.1303 23.0711 70.1973 22.7186 70.1933ZM22.7186 69.5697C22.9679 69.578 23.2162 69.5335 23.4471 69.4393C23.6781 69.345 23.8865 69.203 24.0589 69.0227C24.2211 68.8422 24.3474 68.6324 24.4308 68.4045C24.5187 68.1626 24.5631 67.907 24.5621 67.6496C24.5639 67.3921 24.5195 67.1364 24.4308 66.8947C24.3486 66.6662 24.2222 66.4562 24.0589 66.2765C23.8958 66.0987 23.6986 65.9554 23.479 65.8553C23.2392 65.7544 22.9816 65.7024 22.7213 65.7024C22.4611 65.7024 22.2035 65.7544 21.9637 65.8553C21.7433 65.9539 21.5458 66.0974 21.3838 66.2765C21.2167 66.4533 21.0897 66.6642 21.0118 66.8947C20.9232 67.1364 20.8788 67.3921 20.8805 67.6496C20.8796 67.907 20.924 68.1626 21.0118 68.4045C21.0916 68.6326 21.2172 68.842 21.3809 69.0198C21.5446 69.1976 21.7429 69.3401 21.9637 69.4384C22.2027 69.5367 22.4604 69.5815 22.7186 69.5697Z" fill="white"/>
            <path d="M25.6179 65.1824H26.3838L27.817 69.1868L29.305 65.2098H30.0271L28.107 70.0949H27.4997L25.6179 65.1824Z" fill="white"/>
            <path d="M31.9143 65.1824H32.516L34.6057 70.0675H33.8344L33.3694 68.8586H31.0171L30.5357 70.0675H29.7644L31.9143 65.1824ZM33.1014 68.2842L32.1933 66.0413L31.2688 68.2842H33.1014Z" fill="white"/>
            <path d="M35.6944 65.8061H34.1244V65.1824H37.9537V65.8061H36.3563V70.0675H35.6944V65.8061Z" fill="white"/>
            <path d="M38.7031 65.1824H39.3869V70.0675H38.7031V65.1824Z" fill="white"/>
            <path d="M42.9318 70.1933C42.5793 70.1973 42.2296 70.1303 41.9034 69.9964C41.6011 69.8703 41.3276 69.6842 41.0993 69.4494C40.8646 69.2167 40.6786 68.9396 40.5522 68.6343C40.3042 67.9805 40.3042 67.2585 40.5522 66.6048C40.6786 66.301 40.8646 66.0257 41.0993 65.7951C41.3276 65.5603 41.6011 65.3742 41.9034 65.2481C42.5639 64.9856 43.2998 64.9856 43.9603 65.2481C44.2625 65.3742 44.5361 65.5603 44.7644 65.7951C44.9975 66.027 45.1833 66.302 45.3115 66.6048C45.5668 67.2572 45.5668 67.9819 45.3115 68.6343C45.1833 68.9386 44.9975 69.2154 44.7644 69.4494C44.5361 69.6842 44.2625 69.8703 43.9603 69.9964C43.6341 70.1303 43.2844 70.1973 42.9318 70.1933ZM42.9318 69.5697C43.1934 69.574 43.4528 69.5218 43.6922 69.4165C43.9108 69.317 44.1077 69.1758 44.2721 69.0008C44.4344 68.8203 44.5606 68.6105 44.6441 68.3826C44.7319 68.1407 44.7764 67.8851 44.7754 67.6277C44.7772 67.3702 44.7327 67.1145 44.6441 66.8728C44.5632 66.6446 44.4373 66.4349 44.2738 66.2564C44.1103 66.0778 43.9125 65.934 43.6922 65.8334C43.452 65.7307 43.1931 65.6786 42.9318 65.6803C42.6705 65.6781 42.4116 65.7303 42.1715 65.8334C41.9512 65.934 41.7534 66.0778 41.5899 66.2564C41.4264 66.4349 41.3005 66.6446 41.2196 66.8728C41.131 67.1145 41.0865 67.3702 41.0883 67.6277C41.0873 67.8851 41.1318 68.1407 41.2196 68.3826C41.3031 68.6105 41.4293 68.8203 41.5916 69.0008C41.756 69.1758 41.9529 69.317 42.1715 69.4165C42.4108 69.5223 42.6703 69.5745 42.9318 69.5697Z" fill="white"/>
            <path d="M46.4984 65.1824H47.3682L50.0542 69.1868V65.1715H50.7161V70.0566H49.8901L47.1549 66.0413V70.0566H46.4984V65.1824Z" fill="white"/>
            <path d="M54.0422 65.1824H54.7042V70.0675H54.0422V65.1824Z" fill="white"/>
            <path d="M56.0279 65.1824H56.8922L59.5836 69.1977V65.1824H60.2456V70.0675H59.4031L56.6679 66.0522V70.0675H56.006L56.0279 65.1824Z" fill="white"/>
            <path d="M63.577 65.1825H65.2728C65.4723 65.1815 65.671 65.2073 65.8636 65.259C66.0332 65.3035 66.1928 65.3796 66.3341 65.4833C66.4676 65.5824 66.5731 65.7143 66.6404 65.8663C66.7213 66.037 66.7607 66.2244 66.7553 66.4133C66.767 66.6629 66.6829 66.9075 66.5201 67.0971C66.3569 67.2796 66.1469 67.4139 65.9129 67.4855C66.0587 67.4899 66.2013 67.5293 66.3286 67.6004C66.4555 67.6637 66.5688 67.751 66.6623 67.8575C66.7579 67.9697 66.8338 68.0973 66.8866 68.235C66.9426 68.3835 66.9704 68.5412 66.9687 68.6999C66.9732 68.9011 66.9281 69.1002 66.8374 69.2798C66.7472 69.4483 66.6201 69.5942 66.4654 69.7065C66.3001 69.8258 66.1148 69.9147 65.9183 69.9691C65.6993 70.0298 65.4728 70.0593 65.2455 70.0566H63.5715L63.577 65.1825ZM64.2389 67.212H65.1415C65.2594 67.2137 65.377 67.2008 65.4917 67.1737C65.5966 67.1544 65.6958 67.1114 65.7816 67.0479C65.8654 66.989 65.9331 66.91 65.9785 66.8181C66.0319 66.7132 66.0583 66.5966 66.0551 66.4789C66.0563 66.2942 65.9902 66.1153 65.8691 65.9757C65.7919 65.8995 65.6991 65.8409 65.5971 65.8041C65.4951 65.7673 65.3864 65.753 65.2783 65.7623H64.2389V67.212ZM64.2389 69.4877H65.2127C65.3246 69.4865 65.4363 69.4756 65.5464 69.4549C65.6662 69.4372 65.7814 69.3963 65.8855 69.3345C65.9928 69.27 66.0858 69.1844 66.159 69.0829C66.2364 68.9564 66.2744 68.8098 66.2684 68.6616C66.2767 68.5383 66.2551 68.4147 66.2056 68.3015C66.1561 68.1882 66.0801 68.0884 65.984 68.0107C65.7606 67.8537 65.4908 67.7766 65.2181 67.7918H64.2389V69.4877Z" fill="white"/>
            <path d="M68.5661 65.1824V68.1802C68.5656 68.339 68.5858 68.4972 68.6263 68.6507C68.6659 68.8139 68.7364 68.9681 68.8341 69.1047C68.9323 69.2438 69.0615 69.3581 69.2116 69.4384C69.3927 69.5249 69.5908 69.5698 69.7915 69.5698C69.9921 69.5698 70.1902 69.5249 70.3713 69.4384C70.5214 69.3581 70.6506 69.2438 70.7488 69.1047C70.8465 68.9681 70.9171 68.8139 70.9567 68.6507C70.9971 68.4972 71.0174 68.339 71.0168 68.1802V65.1824H71.6623V68.2842C71.668 68.5483 71.6196 68.8108 71.5201 69.0555C71.4282 69.2822 71.2925 69.4885 71.1208 69.6627C70.9488 69.8333 70.7441 69.9672 70.519 70.0566C70.0398 70.2391 69.5103 70.2391 69.0311 70.0566C68.806 69.9672 68.6013 69.8333 68.4293 69.6627C68.2576 69.4885 68.1219 69.2822 68.03 69.0555C67.9287 68.8111 67.8785 68.5486 67.8823 68.2842V65.1824H68.5661Z" fill="white"/>
            <path d="M73.0628 69.0445C73.1751 69.2184 73.3345 69.3569 73.5223 69.4439C73.6937 69.5243 73.8802 69.5672 74.0694 69.5697C74.1842 69.569 74.2983 69.5525 74.4086 69.5205C74.5215 69.4877 74.6273 69.4338 74.7204 69.3618C74.8133 69.2945 74.8915 69.2088 74.9501 69.1102C75.012 69.004 75.0442 68.883 75.0431 68.7601C75.0469 68.6792 75.0327 68.5984 75.0015 68.5237C74.9702 68.449 74.9228 68.3821 74.8626 68.3279C74.7283 68.2223 74.579 68.1375 74.4195 68.0763C74.239 68.0106 74.0475 67.945 73.8396 67.8848C73.6351 67.8272 73.4398 67.7406 73.2598 67.6277C73.0792 67.5128 72.9261 67.3597 72.8112 67.1791C72.6844 66.9484 72.6238 66.6872 72.6361 66.4242C72.6374 66.2683 72.669 66.1141 72.7291 65.9702C72.7948 65.8044 72.8935 65.6536 73.0191 65.5271C73.1699 65.3869 73.3439 65.274 73.5333 65.1934C73.7737 65.0999 74.0303 65.0553 74.2882 65.0621C74.5476 65.0589 74.8059 65.0958 75.0541 65.1715C75.309 65.2506 75.5327 65.4075 75.6941 65.6201L75.1471 66.1069C75.0587 65.9763 74.9381 65.8708 74.797 65.8006C74.6281 65.7137 74.4396 65.6722 74.2499 65.6802C74.0938 65.6782 73.9385 65.7022 73.7904 65.7514C73.6825 65.7938 73.584 65.857 73.5005 65.9373C73.4303 66.0069 73.3762 66.0909 73.3418 66.1835C73.3155 66.2611 73.3007 66.3423 73.2981 66.4242C73.2923 66.5118 73.3054 66.5997 73.3366 66.6818C73.3677 66.7639 73.4161 66.8384 73.4786 66.9001C73.6076 67.0186 73.758 67.1115 73.9217 67.1737C74.1022 67.2393 74.2937 67.2995 74.5016 67.3542C74.7032 67.4101 74.8978 67.4891 75.0814 67.5894C75.2588 67.6875 75.412 67.8239 75.53 67.9887C75.6566 68.1976 75.7175 68.4396 75.705 68.6835C75.7089 68.8914 75.6662 69.0976 75.58 69.2869C75.4939 69.4762 75.3665 69.6439 75.2072 69.7776C75.0454 69.91 74.8597 70.0103 74.6602 70.073C74.4469 70.1442 74.2232 70.1793 73.9983 70.1769C73.6934 70.178 73.3911 70.1224 73.1066 70.0128C72.8395 69.9087 72.6079 69.7303 72.4392 69.4986L73.0628 69.0445Z" fill="white"/>
            <path d="M76.8209 65.1824H77.4828V70.0675H76.8209V65.1824Z" fill="white"/>
            <path d="M78.8067 65.1824H79.6765L82.368 69.1977V65.1824H83.0299V70.0675H82.1929L79.4577 66.0522V70.0675H78.7958L78.8067 65.1824Z" fill="white"/>
            <path d="M84.3646 65.1824H87.5265V65.8061H85.032V67.2612H87.3515V67.8794H85.032V69.4494H87.6469V70.0675H84.3646V65.1824Z" fill="white"/>
            <path d="M88.7955 69.0445C88.9078 69.2185 89.0672 69.3569 89.2551 69.4439C89.4347 69.5282 89.631 69.5712 89.8294 69.5697C89.9442 69.569 90.0584 69.5525 90.1686 69.5205C90.2816 69.4877 90.3874 69.4339 90.4804 69.3618C90.5747 69.296 90.6532 69.21 90.7102 69.1102C90.7721 69.004 90.8042 68.883 90.8032 68.7601C90.807 68.6792 90.7927 68.5984 90.7615 68.5237C90.7303 68.449 90.6829 68.3821 90.6227 68.3279C90.4884 68.2223 90.339 68.1375 90.1796 68.0763C89.999 68.0106 89.8076 67.945 89.5997 67.8848C89.3955 67.8262 89.2004 67.7397 89.0198 67.6277C88.8409 67.5126 88.6896 67.3595 88.5767 67.1791C88.4455 66.95 88.3828 66.688 88.3962 66.4242C88.405 66.0873 88.5419 65.7665 88.7791 65.5271C88.9299 65.3869 89.1039 65.274 89.2933 65.1934C89.534 65.1009 89.7905 65.0563 90.0483 65.0621C90.3077 65.0589 90.566 65.0958 90.8141 65.1715C91.07 65.2516 91.2953 65.4081 91.4596 65.6201L90.9126 66.1069C90.8257 65.9751 90.7047 65.8693 90.5625 65.8006C90.4018 65.7182 90.2233 65.6769 90.0428 65.6802C89.8885 65.6776 89.7349 65.7017 89.5887 65.7514C89.4786 65.7925 89.378 65.8558 89.2933 65.9374C89.2228 66.0056 89.1702 66.0901 89.1402 66.1835C89.1097 66.2602 89.093 66.3417 89.0909 66.4242C89.0852 66.5119 89.0983 66.5997 89.1294 66.6818C89.1606 66.7639 89.209 66.8384 89.2715 66.9001C89.4017 67.0198 89.5541 67.1127 89.72 67.1737C89.8994 67.2426 90.0819 67.3029 90.2671 67.3542C90.469 67.4092 90.6637 67.4882 90.8469 67.5894C91.0254 67.6859 91.179 67.8226 91.2955 67.9888C91.4247 68.1965 91.4859 68.4394 91.4706 68.6835C91.4736 68.9021 91.4288 69.1186 91.3393 69.3181C91.2506 69.4984 91.128 69.66 90.9782 69.794C90.8153 69.9248 90.6299 70.0249 90.4312 70.0894C90.218 70.1611 89.9942 70.1962 89.7693 70.1933C89.4662 70.1949 89.1655 70.1392 88.8831 70.0292C88.6145 69.9252 88.3811 69.7469 88.2102 69.515L88.7955 69.0445Z" fill="white"/>
            <path d="M92.7015 69.0446C92.8124 69.2177 92.9697 69.3561 93.1556 69.4439C93.3373 69.5278 93.5353 69.5708 93.7354 69.5698C93.8502 69.5691 93.9644 69.5525 94.0746 69.5205C94.1876 69.4877 94.2934 69.4339 94.3864 69.3619C94.4793 69.2945 94.5575 69.2089 94.6162 69.1102C94.6781 69.004 94.7102 68.8831 94.7092 68.7601C94.713 68.6792 94.6987 68.5985 94.6675 68.5238C94.6363 68.449 94.5889 68.3822 94.5287 68.328C94.3956 68.2278 94.248 68.1485 94.091 68.0928C93.916 68.0271 93.7245 67.9615 93.544 67.9013C93.3394 67.8437 93.1441 67.7571 92.9641 67.6442C92.7835 67.5293 92.6304 67.3762 92.5155 67.1956C92.3862 66.9659 92.3254 66.7039 92.3405 66.4407C92.3418 66.2847 92.3734 66.1305 92.4335 65.9866C92.4992 65.8209 92.5978 65.6701 92.7234 65.5435C92.8733 65.4022 93.0475 65.2891 93.2376 65.2098C93.4781 65.1164 93.7347 65.0717 93.9926 65.0786C94.2519 65.0758 94.5102 65.1127 94.7584 65.188C95.0133 65.2671 95.2371 65.4239 95.3984 65.6365L94.8514 66.1234C94.7631 65.9928 94.6425 65.8873 94.5013 65.8171C94.3406 65.7347 94.1621 65.6933 93.9816 65.6967C93.8255 65.6941 93.6701 65.7182 93.5221 65.7678C93.4142 65.8103 93.3157 65.8735 93.2322 65.9538C93.162 66.0233 93.1078 66.1074 93.0735 66.2C93.0471 66.2776 93.0324 66.3587 93.0298 66.4407C93.024 66.5283 93.0371 66.6162 93.0682 66.6983C93.0994 66.7804 93.1478 66.8549 93.2103 66.9166C93.3393 67.0351 93.4896 67.1279 93.6534 67.1901C93.8339 67.2558 94.0254 67.316 94.2332 67.3707C94.4349 67.4266 94.6295 67.5056 94.8131 67.6059C94.9889 67.704 95.1404 67.8405 95.2562 68.0052C95.3873 68.2123 95.4504 68.4552 95.4367 68.7C95.4406 68.9079 95.3979 69.1141 95.3117 69.3034C95.2256 69.4927 95.0982 69.6603 94.9389 69.794C94.7771 69.9265 94.5914 70.0267 94.3919 70.0894C94.1786 70.1606 93.9548 70.1958 93.73 70.1934C93.4251 70.1945 93.1228 70.1388 92.8383 70.0293C92.5712 69.9252 92.3396 69.7467 92.1709 69.5151L92.7015 69.0446Z" fill="white"/>
            <path d="M100.065 0.806702C92.8438 0.806702 87.0725 5.18303 85.0758 11.2388C83.2542 5.30338 77.6962 1.39204 69.2882 1.39204H58.0465V12.5188C56.5258 5.78477 50.5138 0.806702 42.7622 0.806702C35.5577 0.806702 29.77 5.18303 27.7733 11.2388C25.9517 5.30338 20.3937 1.39204 11.9857 1.39204H0.744019V30.5438H11.8216C20.2406 30.5438 25.8204 26.5176 27.7186 20.615C29.6442 26.731 35.3772 31.1237 42.6802 31.1237C50.4372 31.1237 56.5148 26.0745 58.0465 19.3131V30.5438H69.1241C77.5267 30.5438 83.1229 26.534 85.0211 20.615C86.9467 26.731 92.6797 31.1237 99.9827 31.1237C108.976 31.1237 115.721 24.3349 115.721 15.9652V15.8831C115.721 7.51342 109.058 0.806702 100.065 0.806702ZM20.1476 16.009C20.1476 20.7135 16.9419 23.3776 12.1115 23.3776H8.82928V8.5528H12.1115C16.9419 8.5528 20.1476 11.2606 20.1476 15.9214V16.009ZM50.1746 16.0473C50.1746 20.254 47.2151 23.8371 42.7622 23.8371C38.3093 23.8371 35.3061 20.1719 35.3061 15.9652V15.8831C35.3061 11.6764 38.2929 8.09328 42.6692 8.09328C47.0455 8.09328 50.1637 11.7585 50.1637 15.9652L50.1746 16.0473ZM77.4501 16.009C77.4501 20.7135 74.2444 23.3776 69.414 23.3776H66.1318V8.5528H69.414C74.2444 8.5528 77.4501 11.2606 77.4501 15.9214V16.009ZM107.477 16.0473C107.477 20.254 104.518 23.8371 100.065 23.8371C95.6118 23.8371 92.6086 20.1719 92.6086 15.9652V15.8831C92.6086 11.6764 95.5681 8.09328 99.9827 8.09328C104.397 8.09328 107.477 11.7585 107.477 15.9652V16.0473Z" fill="#FFC61A"/>
            <path d="M0 52.2887H115.984" stroke="white" stroke-width="0.139613" stroke-miterlimit="10"/>
            </svg>
          </Link>
        </div>

        {/* <div className="menu">
          <Link className="menu-text" to="/register">SIGN UP</Link>
          <Link className="menu-text" to="/login">LOGIN</Link>
        </div> */}
      </div>
    </nav>
  )
}

export default Nav;