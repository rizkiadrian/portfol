import BoxComponent from '@/components/box-container';
import GradientSVG from '@/components/gradient-svg';

export default function UnitTest() {
  const gradientTest = (
    <div className="flex flex-row items-center justify-center gap-4">
      <GradientSVG percentage={85} />
      <GradientSVG percentage={85} />
    </div>
  );

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="flex flex-col gap-3">
        <p>Box unit will be snapshot tested</p>
        <BoxComponent side={gradientTest} />
      </div>
    </div>
  );
}
