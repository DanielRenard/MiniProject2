export default function ShotListItem(props) {
  return (
    <div className="ShotListItem">
      {props.item.id},
      {props.item.name},
      {props.item.setPiece},
      {props.item.show},
      {props.item.image}
    </div>
  );
}
