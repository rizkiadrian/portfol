interface IBoxProps {
  side?: React.ReactNode;
  inner?: React.ReactNode;
}

function BoxComponent(props: IBoxProps) {
  const { side, inner } = props;
  return (
    <div className="flex w-full flex-row items-center justify-start rounded-[10px] border-[1px] border-solid border-[#737373] bg-[#0B0B0B] pb-[60px] pl-[40px] pr-[50px] pt-[40px]">
      <div className="h-[220px] w-[220px]">{side}</div>
      {inner}
    </div>
  );
}

export default BoxComponent;
