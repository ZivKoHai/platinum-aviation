export function Logo({
  size = 1,
  color = "#F28705",
}: {
  size?: number;
  color?: string;
}) {
  const width = 97 * size;
  const height = 33 * size;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 97 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.0265 15.3359L17.373 19.1883L17.3779 32.0908L16.9708 32.6766L15.3919 32.7114V20.1762C15.3919 20.1316 14.8631 19.5979 14.7365 19.5756L5.08925 28.7473L3.7288 27.6204L12.6735 18.6993L12.9267 17.9447L12.5344 17.3192H0V15.3335H14.0265V15.3359Z"
        fill="#F28705"
      />
      <path
        d="M19.8719 15.3919H32.7115V17.3779H19.0077L15.6743 14.0265V0L17.2422 0.0372384L17.62 0.392244C17.5435 0.799384 17.3978 1.17922 17.3904 1.60373C17.3287 4.48847 17.0324 9.38408 17.3904 12.0528C17.5015 12.8721 17.9731 13.5051 18.7706 12.9242L27.5263 4.08133C28.0744 3.79832 28.6324 4.7541 28.988 5.124L20.104 14.2623L19.8694 15.3919H19.8719Z"
        fill="#F28705"
      />
      <path
        d="M39.7152 13.7037V3.0163H42.9046C44.0597 3.0163 44.9388 3.27186 45.542 3.78297C46.1553 4.29409 46.462 5.04543 46.462 6.03699C46.462 7.02855 46.1553 7.79012 45.542 8.32168C44.9286 8.84301 44.0495 9.10368 42.9046 9.10368H41.0493V13.7037H39.7152ZM41.0493 7.90767H42.7666C43.5026 7.90767 44.0751 7.75945 44.484 7.463C44.9031 7.15633 45.1126 6.68611 45.1126 6.05232C45.1126 5.42876 44.9082 4.96876 44.4993 4.67231C44.1006 4.37587 43.5231 4.22764 42.7666 4.22764H41.0493V7.90767ZM49.4629 13.8264C49.0029 13.8264 48.6298 13.6833 48.3436 13.3971C48.0573 13.1108 47.9142 12.6559 47.9142 12.0324V3.0163H49.2022V11.787C49.2022 12.0835 49.2636 12.2982 49.3862 12.431C49.5089 12.5639 49.6725 12.6304 49.8769 12.6304C49.9689 12.6304 50.0711 12.6202 50.1836 12.5997C50.296 12.5793 50.4136 12.5486 50.5362 12.5077V13.6117C50.3625 13.6833 50.1785 13.7344 49.9842 13.7651C49.79 13.8059 49.6162 13.8264 49.4629 13.8264ZM56.8176 13.7037L56.7256 12.1857V8.96568C56.7256 8.38301 56.562 7.93323 56.2349 7.61634C55.918 7.29945 55.4427 7.141 54.8089 7.141C54.4 7.141 54.0167 7.22789 53.6589 7.40167C53.3011 7.56523 52.9535 7.84634 52.6162 8.24501L51.6809 7.44767C52.1 6.957 52.5804 6.59922 53.1222 6.37433C53.664 6.13921 54.2569 6.02166 54.9009 6.02166C55.8924 6.02166 56.6591 6.27722 57.2009 6.78833C57.7427 7.29945 58.0136 8.02523 58.0136 8.96568V13.7037H56.8176ZM54.3182 13.8264C53.7458 13.8264 53.2449 13.7293 52.8155 13.5351C52.3964 13.3306 52.0693 13.0495 51.8342 12.6917C51.6093 12.3339 51.4969 11.9199 51.4969 11.4497C51.4969 11.0306 51.5786 10.6779 51.7422 10.3917C51.916 10.0952 52.1357 9.86524 52.4015 9.70169C52.6673 9.52791 52.9689 9.41035 53.3062 9.34902C53.6538 9.27746 54.0167 9.24168 54.3949 9.24168H56.8482V10.223H54.5789C54.354 10.223 54.1189 10.2435 53.8735 10.2844C53.6282 10.3252 53.4135 10.4121 53.2295 10.545C53.0966 10.6473 52.9893 10.775 52.9075 10.9284C52.836 11.0817 52.8002 11.2606 52.8002 11.465C52.8002 11.8637 52.9484 12.1806 53.2449 12.4157C53.5413 12.6508 53.94 12.7684 54.4409 12.7684C54.86 12.7684 55.2382 12.6713 55.5756 12.477C55.9231 12.2828 56.1991 12.017 56.4036 11.6797C56.6182 11.3321 56.7256 10.9437 56.7256 10.5144L57.2622 11.0664C57.2009 11.6081 57.0373 12.0886 56.7716 12.5077C56.5058 12.9268 56.1633 13.2539 55.7442 13.4891C55.3353 13.7139 54.86 13.8264 54.3182 13.8264ZM62.4915 13.8264C62.1338 13.8264 61.8066 13.7599 61.5102 13.6271C61.224 13.4839 60.9991 13.259 60.8355 12.9524C60.672 12.6457 60.5902 12.2522 60.5902 11.7717V4.12031L61.9089 3.3843V11.4344C61.9089 11.8535 61.9753 12.1806 62.1082 12.4157C62.2411 12.6406 62.4813 12.753 62.8289 12.753C62.9311 12.753 63.0538 12.7428 63.1969 12.7224C63.34 12.6917 63.4933 12.6559 63.6569 12.615V13.6271C63.4627 13.6986 63.2633 13.7497 63.0589 13.7804C62.8647 13.8111 62.6755 13.8264 62.4915 13.8264ZM59.0262 7.15633V6.14433H63.6569V7.15633H59.0262ZM65.109 13.7037V6.14433H66.397V13.7037H65.109ZM64.9863 4.77965V3.0163H66.5197V4.77965H64.9863ZM68.43 13.7037V6.14433H69.7334V7.75434L69.4267 7.86167C69.5698 7.47323 69.764 7.14611 70.0094 6.88033C70.2547 6.60433 70.5512 6.39477 70.8987 6.25166C71.2463 6.09832 71.6296 6.02166 72.0487 6.02166C72.8767 6.02166 73.5258 6.26699 73.9961 6.75766C74.4663 7.23811 74.7014 7.95367 74.7014 8.90435V13.7037H73.3981V9.37969C73.3981 8.61301 73.255 8.05079 72.9687 7.693C72.6927 7.325 72.2685 7.141 71.696 7.141C71.2769 7.141 70.9192 7.23811 70.6227 7.43234C70.3365 7.62656 70.1167 7.93323 69.9634 8.35234C69.81 8.76124 69.7334 9.28768 69.7334 9.93169V13.7037H68.43ZM79.2075 13.8264C78.6657 13.8264 78.1955 13.7191 77.7968 13.5044C77.3982 13.2795 77.0915 12.9524 76.8768 12.523C76.6724 12.0937 76.5702 11.5621 76.5702 10.9284V6.14433H77.8582V10.4684C77.8582 10.9693 77.9195 11.3884 78.0422 11.7257C78.1751 12.0528 78.3693 12.2982 78.6249 12.4617C78.8804 12.615 79.1973 12.6917 79.5755 12.6917C79.9946 12.6917 80.3473 12.5946 80.6335 12.4004C80.93 12.1959 81.1549 11.8893 81.3082 11.4804C81.4615 11.0715 81.5382 10.545 81.5382 9.90102V6.14433H82.8262V13.7037H81.5382V12.0937H81.8602C81.6455 12.6559 81.3031 13.0853 80.8329 13.3817C80.3626 13.6782 79.8209 13.8264 79.2075 13.8264ZM84.8943 13.7037V6.14433H86.1977V8.09167H85.937C86.029 7.73389 86.1517 7.42722 86.305 7.17167C86.4686 6.90589 86.6577 6.69122 86.8723 6.52766C87.087 6.35388 87.317 6.2261 87.5623 6.14433C87.8179 6.06255 88.0837 6.02166 88.3597 6.02166C88.8197 6.02166 89.2235 6.10855 89.571 6.28233C89.9186 6.45611 90.2048 6.72189 90.4297 7.07967C90.6546 7.42722 90.8079 7.87189 90.8897 8.41368L90.1537 8.45968C90.307 7.93834 90.5013 7.49878 90.7364 7.141C90.9715 6.773 91.2628 6.497 91.6104 6.31299C91.9682 6.11877 92.3924 6.02166 92.8831 6.02166C93.5066 6.02166 94.0075 6.16477 94.3857 6.45099C94.764 6.727 95.04 7.10011 95.2137 7.57034C95.3875 8.03034 95.4744 8.54146 95.4744 9.10368V13.7037H94.1864V9.41035C94.1864 8.94013 94.1302 8.53634 94.0177 8.19901C93.9155 7.86167 93.7468 7.601 93.5117 7.417C93.2868 7.233 92.9802 7.141 92.5917 7.141C92.2237 7.141 91.9068 7.233 91.641 7.417C91.3855 7.601 91.1862 7.88212 91.043 8.26034C90.9101 8.62835 90.8437 9.08835 90.8437 9.64035V13.7037H89.5404V9.30302C89.5404 8.57723 89.4075 8.03545 89.1417 7.67767C88.8759 7.31989 88.4875 7.141 87.9763 7.141C87.6083 7.141 87.2915 7.23811 87.0257 7.43234C86.7599 7.61634 86.5554 7.89234 86.4123 8.26034C86.2692 8.62835 86.1977 9.08835 86.1977 9.64035V13.7037H84.8943ZM38.7646 27.7037L42.8433 17.0163H43.9166L47.9953 27.7037H46.5233L43.3953 18.9483L40.2519 27.7037H38.7646ZM41.0339 25.189L41.4479 23.9777H45.312L45.7566 25.189H41.0339ZM50.7252 27.7037L47.6278 20.1443H49.0538L51.2618 26.0324L53.4852 20.1443H54.8959L51.8138 27.7037H50.7252ZM56.2066 27.7037V20.1443H57.4946V27.7037H56.2066ZM56.084 18.7796V17.0163H57.6173V18.7796H56.084ZM64.4957 27.7037L64.4037 26.1857V22.9657C64.4037 22.383 64.2401 21.9332 63.913 21.6163C63.5961 21.2994 63.1208 21.141 62.487 21.141C62.0781 21.141 61.6948 21.2279 61.337 21.4017C60.9792 21.5652 60.6316 21.8463 60.2943 22.245L59.359 21.4477C59.7781 20.957 60.2585 20.5992 60.8003 20.3743C61.3421 20.1392 61.935 20.0217 62.579 20.0217C63.5706 20.0217 64.3372 20.2772 64.879 20.7883C65.4208 21.2994 65.6917 22.0252 65.6917 22.9657V27.7037H64.4957ZM61.9963 27.8264C61.4239 27.8264 60.923 27.7293 60.4936 27.5351C60.0745 27.3306 59.7474 27.0495 59.5123 26.6917C59.2874 26.3339 59.175 25.9199 59.175 25.4497C59.175 25.0306 59.2567 24.6779 59.4203 24.3917C59.5941 24.0952 59.8139 23.8652 60.0796 23.7017C60.3454 23.5279 60.647 23.4104 60.9843 23.349C61.3319 23.2775 61.6948 23.2417 62.073 23.2417H64.5263V24.223H62.257C62.0321 24.223 61.797 24.2435 61.5516 24.2844C61.3063 24.3252 61.0916 24.4121 60.9076 24.545C60.7748 24.6473 60.6674 24.775 60.5856 24.9284C60.5141 25.0817 60.4783 25.2606 60.4783 25.465C60.4783 25.8637 60.6265 26.1806 60.923 26.4157C61.2194 26.6508 61.6181 26.7684 62.119 26.7684C62.5381 26.7684 62.9163 26.6713 63.2537 26.477C63.6012 26.2828 63.8772 26.017 64.0817 25.6797C64.2963 25.3321 64.4037 24.9437 64.4037 24.5144L64.9403 25.0664C64.879 25.6081 64.7155 26.0886 64.4497 26.5077C64.1839 26.9268 63.8414 27.2539 63.4223 27.4891C63.0134 27.7139 62.5381 27.8264 61.9963 27.8264ZM70.1697 27.8264C69.8119 27.8264 69.4848 27.7599 69.1883 27.6271C68.9021 27.4839 68.6772 27.259 68.5136 26.9524C68.3501 26.6457 68.2683 26.2522 68.2683 25.7717V18.1203L69.587 17.3843V25.4344C69.587 25.8535 69.6534 26.1806 69.7863 26.4157C69.9192 26.6406 70.1594 26.753 70.507 26.753C70.6092 26.753 70.7319 26.7428 70.875 26.7224C71.0181 26.6917 71.1714 26.6559 71.335 26.615V27.6271C71.1408 27.6986 70.9414 27.7497 70.737 27.7804C70.5428 27.8111 70.3537 27.8264 70.1697 27.8264ZM66.7043 21.1563V20.1443H71.335V21.1563H66.7043ZM72.7871 27.7037V20.1443H74.0751V27.7037H72.7871ZM72.6645 18.7796V17.0163H74.1978V18.7796H72.6645ZM79.4355 27.8264C78.7302 27.8264 78.0964 27.6628 77.5341 27.3357C76.9821 26.9984 76.5477 26.5333 76.2308 25.9404C75.9139 25.3475 75.7555 24.6728 75.7555 23.9164C75.7555 23.1599 75.9088 22.4903 76.2155 21.9077C76.5324 21.3148 76.9668 20.8548 77.5188 20.5277C78.081 20.1903 78.7199 20.0217 79.4355 20.0217C80.1511 20.0217 80.7797 20.1903 81.3215 20.5277C81.8735 20.8548 82.308 21.3148 82.6249 21.9077C82.9417 22.4903 83.1002 23.1599 83.1002 23.9164C83.1002 24.6728 82.9417 25.3475 82.6249 25.9404C82.308 26.523 81.8735 26.983 81.3215 27.3204C80.7695 27.6577 80.1408 27.8264 79.4355 27.8264ZM79.4355 26.6764C79.9159 26.6764 80.3299 26.5639 80.6775 26.339C81.0353 26.1039 81.3113 25.7819 81.5055 25.373C81.6997 24.9539 81.7968 24.4684 81.7968 23.9164C81.7968 23.3541 81.6997 22.8686 81.5055 22.4597C81.3113 22.0406 81.0353 21.7186 80.6775 21.4937C80.3299 21.2688 79.9159 21.1563 79.4355 21.1563C78.9448 21.1563 78.5206 21.2739 78.1628 21.509C77.805 21.7339 77.529 22.0508 77.3348 22.4597C77.1406 22.8686 77.0435 23.3541 77.0435 23.9164C77.0435 24.4684 77.1406 24.9539 77.3348 25.373C77.529 25.7819 77.805 26.1039 78.1628 26.339C78.5206 26.5639 78.9448 26.6764 79.4355 26.6764ZM84.8045 27.7037V20.1443H86.1078V21.7543L85.8012 21.8617C85.9443 21.4732 86.1385 21.1461 86.3838 20.8803C86.6292 20.6043 86.9256 20.3948 87.2732 20.2517C87.6207 20.0983 88.0041 20.0217 88.4232 20.0217C89.2512 20.0217 89.9003 20.267 90.3705 20.7577C90.8408 21.2381 91.0759 21.9537 91.0759 22.9043V27.7037H89.7725V23.3797C89.7725 22.613 89.6294 22.0508 89.3432 21.693C89.0672 21.325 88.643 21.141 88.0705 21.141C87.6514 21.141 87.2936 21.2381 86.9972 21.4323C86.7109 21.6266 86.4912 21.9332 86.3378 22.3523C86.1845 22.7612 86.1078 23.2877 86.1078 23.9317V27.7037H84.8045Z"
        fill={color}
      />
    </svg>
  );
}
